// default llist of suggested sounds for dropdown
var players = {};
// default sounds to initialize webpage
var videoData = {
    'Music Lofi': 'Ah7i5EFVDqA',
    'Soft Piano Music': 'cHKHv3ZHTkM',
    'Birds': 'bKmmcKWMDfM',
    'Fireplace': '3_gdxb7AyGo',
    'Cat Purring': 'SR5L2BSYNuE',
    'Lake Waters': 'zdGs4pvgR9M',
};

// optional sounds provided as dropdown
var dropDownData = {
    'Music Lofi': 'Ah7i5EFVDqA',
    'Music Alpha Waves': 'WPni755-Krg',
    'Soft Piano Music': 'cHKHv3ZHTkM',
    'Soft Jazz Music': '13jhFFYCWVU',
    'Uplifting Playlist': 'CpNBODqTA34',
    'Yoga ': 'G7WnJ1qBwCA',
    'Yoga 2 ': 'FTqrQsSIKR0',
    'Rain': 'J4d-a7dVtiQ',
    'Snow Fall With Windy Trees': 'vz91QpgUjFc',
    'Birds': 'bKmmcKWMDfM',
    'Fireplace': '3_gdxb7AyGo',
    'Brown Noise': 'RqzGzwTY-6w',
    'Winter Storm Winds': 'sGkh1W5cbH4',
    'Traffic': 'fh3EdeGNKus',
    'Thunderstorm': 'mPZkdNFkNps',
    'Cat Purring': 'SR5L2BSYNuE',
    'Lake Waters': 'zdGs4pvgR9M',
    'Wind Chimes': 'T_wKO6XdEh8',
    'Night Ambience': 'g1w3IT5WnYw',
    'Night Lake Frogs And Insects': 'ih4_1FyVjaY',
    'Forrest': 'xNN7iTA57jM',
    'Keyboard Typing AMSR': '-2RiNR2fqRY',
    'Soft Brook': 'IvjMgVS6kng',
    'Coffee House': 'FTWd28r472c',
    'Train Ride': 'pqfQhPM8reU',
    'Aircraft Cabin': 'co7KgV2edvI',
    'Bedtime Story - Adults': 'V4fBgXgxjjg',
    'Guided Sleep Hypnosis': 'Sh-YrLYC7p8',
    'Ceiling Fan': 'Xkx6Y0nYAYw',
};

function onYouTubeIframeAPIReady() {
    Object.entries(videoData).forEach(([playerName, videoId]) => {
        addPlayer(playerName, videoId);
    });
}

function addPlayer(playerName, videoId) {
    var playerCount = Object.keys(players).length + 1;
    var playerId = 'player' + playerCount;

    // Create player container
    var container = document.createElement('div');
    container.classList.add('player-container');
    container.setAttribute('id', 'container-' + playerId); // Set an ID for the container

    // Add player name label
    var nameLabel = document.createElement('p');
    nameLabel.textContent = playerName;
    container.appendChild(nameLabel);

    // add player div
    var playerDiv = document.createElement('div');
    playerDiv.id = playerId;
    container.appendChild(playerDiv);

    // add player controls div
    var controlsDiv = document.createElement('div');
    controlsDiv.classList.add('controls');
    
        var playButton = document.createElement('button');
        playButton.classList.add('playButton');
        playButton.setAttribute('data-player', playerId);
        playButton.innerHTML = '<i class="fas fa-play"></i>';
        playButton.disabled = true; // Enabled later when player is ready

        var volumeButton = document.createElement('button');
        volumeButton.classList.add('volumeButton');
        volumeButton.setAttribute('data-player', playerId);
        volumeButton.innerHTML = '<i class="fas fa-cog"></i>';

        var volumeSlider = document.createElement('input');
        volumeSlider.type = 'range';
        volumeSlider.classList.add('volume-slider');
        volumeSlider.setAttribute('data-player', playerId);
        volumeSlider.min = '0';
        volumeSlider.max = '100';
        volumeSlider.value = '100';

        var deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.setAttribute('data-player', playerId); // Associate button with specific player
        deleteButton.style.display = 'none';
        deleteButton.onclick = function() {
            // Remove player container from DOM
            document.getElementById('playersContainer').removeChild(container);
            // Delete player from players object
            delete players[playerId];
        };

    // build controls for player
    controlsDiv.appendChild(playButton);
    controlsDiv.appendChild(volumeButton);
    controlsDiv.appendChild(volumeSlider);
    controlsDiv.appendChild(deleteButton);
    
    // add player and controls together
    container.appendChild(playerDiv);
    container.appendChild(controlsDiv);

    // add player to playersContainer div
    document.getElementById('playersContainer').appendChild(container);

    // Store player name and videoId in the players object
    players[playerId] = { name: playerName, videoId: videoId, player: createPlayer(playerId, videoId) };
}

// create a new YT player
function createPlayer(elementId, videoId) {
    return new YT.Player(elementId, {
        height: '0',
        width: '0',
        videoId: videoId,
        playerVars: {
            autoplay: 0,
            controls: 0,
            showinfo: 0,
            rel: 0,
            modestbranding: 1
        },
        events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange
        }
    });
}

// only enable play pause buttons once YT player is ready
function onPlayerReady(event) {
    document.querySelectorAll('.playButton, .volumeButton').forEach(button => button.disabled = false);
}

// Event delegation for play and volume controls
document.addEventListener('click', function(event) {
    if (event.target.closest('.playButton')) {
        var button = event.target.closest('.playButton');
        var playerId = button.getAttribute('data-player');
        togglePlayPause(playerId);
    } else if (event.target.closest('.volumeButton')) {
        var volumeButton = event.target.closest('.volumeButton');
        var playerId = volumeButton.getAttribute('data-player');
        var slider = document.querySelector(`.volume-slider[data-player="${playerId}"]`);
        var deleteButton = document.querySelector(`button[data-player="${playerId}"]:not(.playButton, .volumeButton)`);
        // toggle volume slider and delete buttons 
        slider.style.display = slider.style.display === 'block' ? 'none' : 'block';
        deleteButton.style.display = deleteButton.style.display === 'block' ? 'none' : 'block';
    }
});

// user changes volume slider
document.addEventListener('input', function(event) {
    if (event.target.classList.contains('volume-slider')) {
        var slider = event.target;
        var playerId = slider.getAttribute('data-player');
        var player = players[playerId].player; // Access the YT.Player instance
        player.setVolume(slider.value);
    }
});

// user clicks play or pause sound from specific player
function togglePlayPause(playerId) {
    var player = players[playerId].player; // Access the YT.Player instance
    var state = player.getPlayerState();
    var button = document.querySelector(`button[data-player="${playerId}"]`);
    if (state === YT.PlayerState.PLAYING || state === YT.PlayerState.BUFFERING) {
        player.pauseVideo();
        button.innerHTML = '<i class="fas fa-play"></i>';
    } else {
        player.playVideo();
        button.innerHTML = '<i class="fas fa-pause"></i>';
    }
}

// toggle display of play pause buttons
function onPlayerStateChange(event) {
    var playerElementId = event.target.getIframe().id;
    var playerKey = Object.keys(players).find(key => players[key].player === event.target);
    var button = document.querySelector(`button[data-player="${playerKey}"]`);
    if (event.data === YT.PlayerState.PLAYING) {
        button.innerHTML = '<i class="fas fa-pause"></i>';
    } else {
        button.innerHTML = '<i class="fas fa-play"></i>';
    }
}

// detect click on add player button
document.getElementById('addPlayerBtn').addEventListener('click', function() {
    document.getElementById('addPlayerModal').style.display = 'block';
    populateDropdown(); // build dropdown
    });

// Function to populate the dropdown
function populateDropdown() {
    var dropdown = document.getElementById('videoDropdown');
    Object.keys(dropDownData).forEach(function(key) {
        var option = document.createElement('option');
        option.text = key;
        option.value = dropDownData[key];
        dropdown.appendChild(option);
    });
}

// populate modal sound name fields when drop down is selected
document.getElementById('videoDropdown').addEventListener('change', function() {
    // Get selected video ID and Sound Name
    var videoId = this.value; 
    var soundName = this.options[this.selectedIndex].text;
    
    // Populate the Sound Name and Video ID fields
    document.getElementById('playerName').value = soundName;
    document.getElementById('videoId').value = videoId;
});


// detect click on cancel button in modal
document.getElementById('cancelAddPlayer').addEventListener('click', function() {
    document.getElementById('addPlayerModal').style.display = 'none';
});

// user clicked add sound button
document.getElementById('addPlayerSubmit').addEventListener('click', function() {
    var playerName = document.getElementById('playerName').value.trim();
    var videoId = document.getElementById('videoId').value.trim();

    if (playerName && videoId) {
        addPlayer(playerName, videoId);
        //reset and hide modal
        document.getElementById('addPlayerModal').style.display = 'none';
        document.getElementById('playerName').value = '';
        document.getElementById('videoId').value = '';
    } else {
        alert('Please fill in both fields.');
    }
});


onYouTubeIframeAPIReady(); // DEBUG ONLY - DELETE
