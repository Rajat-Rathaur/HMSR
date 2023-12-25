// ALL FKEY AND PKEY CONSTARINT HERE 

const connection = require('../Connections/connect.js');

async function belongsToConstraints() {
    try {

        await connection.query(`
        ALTER TABLE belongs_to
        ADD  KEY (branchNo, roomNo, bedNo)
        `);
        console.log('Primary Key Constraints added to belongs_to table successfully');
    }
    catch (err) {
        console.error('Error adding Primary Key constraints to belongs_to table:', err);
    }
    try {

        await connection.query(`
          ALTER TABLE belongs_to
          ADD FOREIGN KEY (hId) REFERENCES hostelites(H_id) ON DELETE CASCADE,
          ADD FOREIGN KEY (branchNo) REFERENCES branch(b_id) ON DELETE CASCADE,
          ADD FOREIGN KEY (roomNo) REFERENCES rooms(roomNo) ON DELETE CASCADE
        `);

        console.log('Foreign Key added to belongs_to table successfully');
    } catch (err) {
        console.error('Error adding constraints to belongs_to table:', err);
    }
}

async function addKeys(){

}

const createConstraints = async () => {
    try {
        // await belongsToConstraints();

    } catch (err) {
        console.error('Error creating tables:', err);
    }
};

module.exports = createConstraints;