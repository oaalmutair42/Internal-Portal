// contains the raw db queries
const db = require('../db/database');

const createUser = (name, email, hashedPassword, role = 'visitor') => {
  return new Promise((resolve, reject) => {
    const query = `
      INSERT INTO users (name, email, password, role)
      VALUES (?, ?, ?, ?)
    `;
    db.run(query, [name, email, hashedPassword, role], function (err) {
      if (err) reject(err);
      else resolve(this.lastID);
    });
  });
};

const getUserById = (id) => {
    return new Promise((resolve, reject) => {
      const userId = parseInt(id, 10);
      console.log(`[DEBUG] Fetching user_id=${userId} (original: ${id})`);
  
      db.get(
        `SELECT user_id, name, email, role, created_at FROM users WHERE user_id = ?`,
        [userId],
        (err, row) => {
          if (err) {
            console.error('[ERROR] Database error:', err);
            reject(err);
          } else {
            console.log('[DEBUG] Found user:', row);
            resolve(row);
          }
        }
      );
    });
  };

const getAllUsers = () => {
  return new Promise((resolve, reject) => {
    db.all(`SELECT user_id, name, email, role, created_at FROM users`, [], (err, rows) => {
      if (err) reject(err);
      else resolve(rows);
    });
  });
};
const updateUser = (id, name, email, role) => {
    return new Promise((resolve, reject) => {
      db.run(
        `UPDATE users SET name = ?, email = ?, role = ? WHERE user_id = ?`,
        [name, email, role, id],
        function (err) {
          if (err) reject(err);
          else resolve(this.changes);
        }
      );
    });
  };
  
const deleteUser = (id) => {
    return new Promise((resolve, reject) => {
      db.run(`DELETE FROM users WHERE user_id = ?`, [id], function (err) {
        if (err) reject(err);
        else resolve(this.changes);
      });
    });
};

const findUserByEmail = (email) => {
    return new Promise((resolve, reject) => {
      db.get(`SELECT * FROM users WHERE email = ?`, [email], (err, row) => {
        if (err) reject(err);
        else resolve(row);
      });
    });
};
module.exports = {
  createUser,
  getUserById,
  getAllUsers,
  updateUser,
  deleteUser,
  findUserByEmail,
};
