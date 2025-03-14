document.addEventListener("DOMContentLoaded", function () {
    // Первый плеер (Интенсивность)
    const intensitySlider = document.getElementById("intensitySlider");
    const audioLayer1 = document.getElementById("audioLayer1"); // Базовый фон
    const audioLayer2 = document.getElementById("audioLayer2"); // Средняя интенсивность
    const audioLayer3 = document.getElementById("audioLayer3"); // Экшен

    function updateIntensity() {
        let value = parseFloat(intensitySlider.value);
        audioLayer1.volume = 1; // Базовый слой всегда играет
        audioLayer2.volume = value < 0.5 ? value * 2 : 1; // Плавное включение второго слоя
        audioLayer3.volume = value > 0.5 ? (value - 0.5) * 2 : 0; // Плавное включение третьего слоя
    }

    intensitySlider.addEventListener("input", updateIntensity);

    window.playMusic = function() {
        audioLayer1.play();
        audioLayer2.play();
        audioLayer3.play();
    };

    window.pauseMusic = function() {
        audioLayer1.pause();
        audioLayer2.pause();
        audioLayer3.pause();
    };

    // Второй плеер (Эмоции)
    const emotionSlider = document.getElementById("emotionSlider");
    const happyLayer = document.getElementById("happyLayer");
    const sadLayer = document.getElementById("sadLayer");

    function updateEmotion() {
        let value = parseFloat(emotionSlider.value);
        happyLayer.volume = 1 - value; // Весёлая музыка плавно уменьшается
        sadLayer.volume = value; // Грустная музыка плавно увеличивается
    }

    emotionSlider.addEventListener("input", updateEmotion);

    window.playEmotionMusic = function() {
        happyLayer.play();
        sadLayer.play();
    };

    window.pauseEmotionMusic = function() {
        happyLayer.pause();
        sadLayer.pause();
    };

    // Устанавливаем громкость в начальные значения (важно!)
    updateIntensity();
    updateEmotion();
});
