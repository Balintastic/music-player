document.querySelectorAll('input[type="range"]').forEach((slider) => {
    const updateProgress = () => {
        const min = slider.min === '' ? 0 : Number(slider.min);
        const max = slider.max === '' ? 100 : Number(slider.max);
        const progress = max > min ? ((Number(slider.value) - min) / (max - min)) * 100 : 0;
        slider.style.setProperty('--slider-progress', `${progress}%`);
    };

    slider.addEventListener('input', updateProgress);
    updateProgress();
});
