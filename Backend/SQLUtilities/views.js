const connection = require('../Connections/connect.js');


async function createRoomsFreeBedsView() {
    try {
        await connection.query(`
          CREATE OR REPLACE VIEW rooms_free_beds AS
          SELECT rooms.roomNo, roomType, COUNT(*) AS freeBeds
          FROM rooms
          LEFT JOIN belongs_to ON rooms.roomNo = belongs_to.roomNo
          WHERE belongs_to.bedNo IS NULL OR belongs_to.dateOfLeave > CURDATE()
          GROUP BY rooms.roomNo, roomType;
        `);
        console.log('rooms_free_beds view created successfully');
    } catch (err) {
        console.error('Error creating rooms_free_beds view:', err);
    }
}

async function displayRoomsFreeBeds() {
    try {
        const query = 'SELECT * FROM rooms_free_beds';
        const [rows] = await connection.query(query);

        if (rows.length === 0) {
            console.log('No rooms with free beds found.');
        } else {
            console.log('Rooms with free beds:');
            rows.forEach((row) => {
                console.log(`Room Number: ${row.roomNo}, Room Type: ${row.roomType}, Free Beds: ${row.freeBeds}`);
            });
        }
    } catch (err) {
        console.error('Error displaying rooms with free beds:', err);
    }
}


const createViews = async () => {
    try {
        console.log('Database connected');
        await createRoomsFreeBedsView();
        await displayRoomsFreeBeds();

    } catch (err) {
        console.error('Error creating tables:', err);
    }
};


module.exports = createViews;