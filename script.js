document.addEventListener("DOMContentLoaded", function () {
    // Первый плеер (Интенсивность)
    const intensitySlider = document.getElementById("intensitySlider");
    const audioLayer1 = document.getElementById("audioLayer1");
    const audioLayer2 = document.getElementById("audioLayer2");
    const audioLayer3 = document.getElementById("audioLayer3");

    // Проверяем, что слайдер существует
    if (!intensitySlider) {
        console.error("Ошибка: Ползунок интенсивности не найден!");
        return;
    }

    // Проверяем, что аудиофайлы загружены
    if (!audioLayer1 || !audioLayer2 || !audioLayer3) {
        console.error("Ошибка: Один из аудиофайлов для интенсивности не найден!");
        return;
    }

    function updateIntensity() {
        let value = parseFloat(intensitySlider.value);
        audioLayer1.volume = 1; // Базовый слой всегда играет
        audioLayer2.volume = value < 0.5 ? value * 2 : 1; // Плавное включение второго слоя
        audioLayer3.volume = value > 0.5 ? (value - 0.5) * 2 : 0; // Плавное включение третьего слоя
    }

    intensitySlider.addEventListener("input", updateIntensity);

    window.playMusic = function() {
        try {
            if (audioLayer1.readyState >= 2) audioLayer1.play();
            if (audioLayer2.readyState >= 2) audioLayer2.play();
            if (audioLayer3.readyState >= 2) audioLayer3.play();
        } catch (err) {
            console.error("Ошибка воспроизведения: ", err);
        }
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

    // Проверяем, что слайдер существует
    if (!emotionSlider) {
        console.error("Ошибка: Ползунок эмоций не найден!");
        return;
    }

    // Проверяем, что аудиофайлы второго плеера загружены
    if (!happyLayer || !sadLayer) {
        console.error("Ошибка: Файлы happy.mp3 или sad.mp3 не загружены!");
        return;
    }

    function updateEmotion() {
        let value = parseFloat(emotionSlider.value);
        happyLayer.volume = 1 - value; // Весёлая музыка плавно уменьшается
        sadLayer.volume = value; // Грустная музыка плавно увеличивается
    }

    emotionSlider.addEventListener("input", updateEmotion);

    window.playEmotionMusic = function() {
        try {
            if (happyLayer.readyState >= 2) happyLayer.play();
            if (sadLayer.readyState >= 2) sadLayer.play();
        } catch (err) {
            console.error("Ошибка воспроизведения эмоций: ", err);
        }
    };

    window.pauseEmotionMusic = function() {
        happyLayer.pause();
        sadLayer.pause();
    };

    // Устанавливаем громкость в начальные значения
    updateIntensity();
    updateEmotion();
});
