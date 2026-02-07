// ============================================
// 💝 CUSTOMIZE YOUR VALENTINE'S WEBSITE HERE 💝
// ============================================

const CONFIG = {
    // Your Valentine's name that will appear in the title
    // Example: "Jade", "Sarah", "Mike"
    valentineName: "Кот",

    // The title that appears in the browser tab
    // You can use emojis! 💝 💖 💗 💓 💞 💕
    pageTitle: "За Тина? 💝",

    // Floating emojis that appear in the background
    // Find more emojis at: https://emojipedia.org
    floatingEmojis: {
        hearts: ['❤️', '💖', '💝', '💗', '💓'],  // Heart emojis
        bears: ['🧸', '🐻']                       // Cute bear emojis
    },

    // Questions and answers
    // Customize each question and its possible responses
    questions: {
        first: {
            text: "Харесваш ли ме?",                                    // First interaction
            yesBtn: "Да",                                             // Text for "Yes" button
            noBtn: "Не",                                               // Text for "No" button
            secretAnswer: "Не те харесвам, обичам те! ❤️"           // Secret hover message
        },
        second: {
            text: "Колко много ме обичаш?",                          // For the love meter
            startText: "Толкова много!",                                   // Text before the percentage
            nextBtn: "Следващ ❤️"                                         // Text for the next button
        },
        third: {
            text: "Ще бъдеш ли моята валентинка на 14ти Февруари 2026 г.? 🌹", // The big question!
            yesBtn: "Да!",                                             // Text for "Yes" button
            noBtn: "Не"                                                 // Text for "No" button
        }
    },

    // Love meter messages
    // They show up depending on how far they slide the meter
    loveMessages: {
        extreme: "Ехее ти ме обичаш толкова много?? 🥰🚀🌕💝",      // Shows when they go past 5000%
        high: "До луната и обратно! 🚀🌕💝",                        // Shows when they go past 1000%
        normal: "Отвъд всичко, което виждаш! 🥰"                     // Shows when they go past 100%
    },

    // Messages that appear after they say "Yes!"
    celebration: {
        title: "Аз съм най-щастливият мъж на земята! 😘🎉💝💖💝💓",
        message: "Ела сега при мен да те изненадам с една голяма гореща прегръдка и страстна целувка!",
        emojis: "🎁💖🤗💝💋❤️💕"  // These will bounce around
    },

    // Color scheme for the website
    // Use https://colorhunt.co or https://coolors.co to find beautiful color combinations
    colors: {
        backgroundStart: "#ffafbd",      // Gradient start (try pastel colors for a soft look)
        backgroundEnd: "#ffc3a0",        // Gradient end (should complement backgroundStart)
        buttonBackground: "#ff6b6b",     // Button color (should stand out against the background)
        buttonHover: "#ff8787",          // Button hover color (slightly lighter than buttonBackground)
        textColor: "#ff4757"             // Text color (make sure it's readable!)
    },

    // Animation settings
    // Adjust these if you want faster/slower animations
    animations: {
        floatDuration: "15s",           // How long it takes hearts to float up (10-20s recommended)
        floatDistance: "50px",          // How far hearts move sideways (30-70px recommended)
        bounceSpeed: "0.5s",            // Speed of bouncing animations (0.3-0.7s recommended)
        heartExplosionSize: 1.5         // Size of heart explosion effect (1.2-2.0 recommended)
    },

    // Background Music (Optional)
    // Add your own music URL after getting proper licenses
    music: {
        enabled: true,                     // Music feature is enabled
        autoplay: true,                    // Try to autoplay (note: some browsers may block this)
        musicUrl: "https://cs1.mp3.pm/listen/137226265/UjFLc0U5QlEyMEFsdXBqMy85eGsycGdEaVFTbEJhYlBBU1gxQ29mdWRTSXc0Q1FwNWptY0lKUStQMnZxTDV2NHQxZWZqRTE4eTVIRGRFd0tpWnN0Rjl4bXg4aDMwWlNhb2t2WC80OUU0SzNpditCZk9TaW1LaThUUFdsYXpuQUQ/Pavell_Venci_Venc_feat._Mihaela_Fileva_-_Lyubov_(mp3.pm).mp3", // Music streaming URL
        startText: "🎵 Пусни музика",        // Button text to start music
        stopText: "🔇 Спри музиката",         // Button text to stop music
        volume: 0.4                        // Volume level (0.0 to 1.0)
    }
};

// Don't modify anything below this line unless you know what you're doing
window.VALENTINE_CONFIG = CONFIG; 