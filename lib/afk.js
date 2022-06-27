
/* Coded By Thesandu Thewsara
 × Don't Copy or Rewrite This files × 
*/

const fs = require('fs-extra');

/**
 * Add AFK user.
 * @cutie {string} userId 
 * @cutie {string} time 
 * @cutie {string} reason 
 * @cutie {object} _dir 
 */
const addAfkUser = (userId, time, reason, _dir) => {
    const obj = { id: userId, time: time, reason: reason }
    _dir.push(obj)
    fs.writeFileSync('./database/afk.json', JSON.stringify(_dir));
}

/**
 * Check if user is on AFK state.
 * @cutie {string} userId 
 * @cutie {object} _dir 
 * @returns {boolean}
 */
const checkAfkUser = (userId, _dir) => {
    let status = false;
    Object.keys(_dir).forEach((i) => {
        if (_dir[i].id === userId) {
            status = true;
        }
    })
    return status
}

/**
 * Get user AFK reason.
 * @cutie {string} userId 
 * @cutie {object} _dir 
 * @returns {string}
 */
const getAfkReason = (userId, _dir) => {
    let position = null
    Object.keys(_dir).forEach((i) => {
        if (_dir[i].id === userId) {
            position = i
        }
    })
    if (position !== null) {
        return _dir[position].reason
    }
}

/**
 * Get user AFK time.
 * @cutie {string} userId 
 * @cutie {object} _dir 
 * @returns {string}
 */
const getAfkTime = (userId, _dir) => {
    let position = null
    Object.keys(_dir).forEach((i) => {
        if (_dir[i].id === userId) {
            position = i
        }
    })
    if (position !== null) {
        return _dir[position].time
    }
}

/**
 * Get user AFK ID.
 * @cutie {string} userId 
 * @cutie {object} _dir 
 * @returns {string}
 */
const getAfkId = (userId, _dir) => {
    let position = null
    Object.keys(_dir).forEach((i) => {
        if (_dir[i].id === userId) {
            position = i
        }
    })
    if (position !== null) {
        return _dir[position].id
    }
}

/**
 * Get user AFK index position.
 * @cutie {string} userId 
 * @cutie {object} _dir 
 * @returns {number}
 */
const getAfkPosition = (userId, _dir) => {
    let position = null
    Object.keys(_dir).forEach((i) => {
        if (_dir[i].id === userId) {
            position = i
        }
    })
    return position
}

module.exports = {
    addAfkUser,
    checkAfkUser,
    getAfkReason,
    getAfkTime,
    getAfkId,
    getAfkPosition
}