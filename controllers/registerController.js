const voterRegistrationTopic = require('../voterRegistrationTopic');

 function registerVoter(req, res) {
    console.log('Body:', req.body);
    console.log('Files:', req.files);
    res.status(200).json({ message: "Voter registered successfully 🚀" });
    voterRegistrationTopic.publishToHCS(req.body);
}

module.exports = {registerVoter};