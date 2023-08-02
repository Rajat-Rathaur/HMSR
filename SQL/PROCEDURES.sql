DELIMITER $$

CREATE PROCEDURE `room_allocation` ()   BEGIN
    DECLARE is_double VARCHAR(10);
    DECLARE bed_count INT;

    CREATE TEMPORARY TABLE temp_room_allocation (
        B_no INT,
        R_no INT,
        bed_no INT,
        H_no INT
    );

    INSERT INTO temp_room_allocation
    SELECT
        rooms.B_no,
        rooms.R_ID AS R_no,
        IF(rooms.R_Type = 'DOUBLE', 1, belongs_to.bed_no) AS bed_no,
        (SELECT H_no FROM belongs_to WHERE belongs_to.R_no = rooms.R_ID AND belongs_to.B_no = rooms.B_no) AS H_no
    FROM
        rooms
        LEFT JOIN belongs_to ON belongs_to.R_no = rooms.R_ID AND belongs_to.B_no = rooms.B_no
    WHERE
        rooms.R_Status = 'EMPTY';
    SELECT * FROM temp_room_allocation;
    DROP TEMPORARY TABLE temp_room_allocation;
END$$


