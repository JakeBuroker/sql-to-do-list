const router = require('express').Router();
const pool = require('../modules/pool');

// GET
router.get('/', (req, res) => {
  let queryText = `SELECT * FROM "todos" ORDER BY "id"`
    pool.query(queryText).then(result => {
      res.send(result.rows);
    })
    .catch(error => {
      console.log('error getting todos', error);
      res.sendStatus(500);
    });
  });

// POST
router.post('/',  (req, res) => {
  let newToDo = req.body;
  let queryText = `INSERT INTO "todos" ("text")
    VALUES 
    ($1)`
    pool.query(queryText, [newToDo.text])
      .then(result => {
        console.log(newToDo)
        res.sendStatus(201);
      })
      .catch(error => {
        console.log(`Error adding To Do`, error);
        res.sendStatus(500);
      });
  }); 

// PUT
router.put('/:id', (req, res) => {
    let toDoId = req.params.id;
    let isComplete = req.body.isComplete;
    let queryText = `UPDATE "todos" SET "isComplete" = True WHERE "id" = $1;`;
    pool.query(queryText,[toDoId])
      .then(result => {
        res.sendStatus(200);
      })
      .catch(error => {
        console.log(`Error updating book read status`, error);
        res.sendStatus(500);
      });
  }); 

router.put('/:id/complete', (req, res) => {
  let toDoId = req.params.id;
  let queryText = `UPDATE "todos" SET "isComplete" = TRUE, "completedAt" = NOW() WHERE "id" = $1;`;
  pool.query(queryText, [toDoId])
    .then(result => {
        res.sendStatus(200);
      })
      .catch(error => {
        console.log(`Error marking task as complete`, error);
        res.sendStatus(500);
      });
  });



// DELETE
router.delete('/:id', (req, res) => {
  console.log("running")
  let toDoId = req.params.id;
  const queryText = `DELETE FROM "todos" WHERE "id" = $1;`
  const queryParams = [toDoId];
  
  pool.query(queryText, queryParams)
        .then(() => {
            console.log("To Do Deleted")
            res.sendStatus(200);
        })
        .catch((error) => {
            console.log("Error in DELETE query: ", queryText, error);
            res.sendStatus(500);
        });
  });

// EXPORT
module.exports = router;
