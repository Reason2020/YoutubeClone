const db = require('../db');

const getAllVideos = async (req, res) => {
    try {
        const videos = await db.query('SELECT * FROM videos');
        if (videos) {
            return res.status(200).json({
                success: true,
                message: 'Videos received successfully!',
                data: videos.rows
            });
        }
        res.status(400).json({
            success: false,
            message: 'No videos found'
        })
    } catch (err) {
        res.status(500).json({
            success: false,
            message: 'Server error when getting videos'
        });
    }
}

//get video by id
const getVideoById = async (req, res) => {
    try {
        const { videoId } = req.params;
        const video = await db.query('SELECT * FROM videos WHERE videoId=$1', [videoId]);
        if (!video) {
            return res.status(400).json({
                success: false,
                message: 'Invalid Video Id'
            });
        }
        res.status(200).json({
            success: true,
            message: 'Successfully received video information',
            data: video.rows
        });
    } catch (err) {
        console.log(`Error getting video by id: `, err);
        res.status(500).json({
            success: false,
            message: 'Server error when getting video information'
        })
    }
}

//add new video
const addNewVideo = async (req, res) => {
    try {
        
    } catch (err) {
        console.log('Error when adding new video: ', err);
        res.status(500).json({
            success: false,
            message: 'Server failed to add new video'
        })
    }
}

module.exports = {
    getAllVideos
}