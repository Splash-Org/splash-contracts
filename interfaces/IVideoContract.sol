// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.2;

interface IVideoContract {
    /**
     * @notice Event is emitted after a video is uploaded
     */
    event VideoUploaded(
        uint256 videoCount,
        string hash,
        string title,
        string description,
        string location,
        string category,
        string thumbnailHash,
        string date,
        address author
    );

    /**
     * @notice Emitted when owner updates the super token factory
     * @param _videoHash unique hash of the video
     * @param _title title of the video
     * @param _description description of the video
     * @param _thumbnailHash hash of the thumbnail uploaded to ipfs
     * @param _date date of the upload
     */
    function uploadVideo(
        string memory _videoHash,
        string memory _title,
        string memory _description,
        string memory _thumbnailHash,
        string memory _date
    ) external;
}
