const axios = require('axios');

async function preventHibernation() {
    try {
        const res = await axios.get(process.env.SITE_URL);
        console.log('Hibernation prevention success / data : ', res.data);
    } catch (err) {
        // No code but we should put the catch block anyway
    } finally {
        setTimeout(() => preventHibernation(), 5 * 60 * 1000);
    }
}

module.exports = preventHibernation;
