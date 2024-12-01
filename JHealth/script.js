function calculateCalories() {
    const age = document.getElementById('age').value;
    const height = document.getElementById('height').value;
    const weight = document.getElementById('weight').value;
    const activityLevel = document.getElementById('activity-level').value;

    if (!age || !height || !weight || !activityLevel) {
        alert('يرجى ملء جميع الحقول!');
        return;
    }

    const bmr = 10 * weight + 6.25 * height - 5 * age + 5; // للرجال (استخدم -161 للنساء)
    const totalCalories = bmr * activityLevel;

    document.getElementById('calorie-result').textContent = `احتياجاتك اليومية من السعرات الحرارية: ${Math.round(totalCalories)} سعر حراري.`;
}

function calculateBMI() {
    const weight = document.getElementById('bmi-weight').value;
    const height = document.getElementById('bmi-height').value / 100;

    if (!weight || !height) {
        alert('يرجى ملء جميع الحقول!');
        return;
    }

    const bmi = weight / (height * height);
    let status;

    if (bmi < 18.5) status = 'نقص الوزن';
    else if (bmi < 24.9) status = 'وزن صحي';
    else if (bmi < 29.9) status = 'زيادة الوزن';
    else status = 'سمنة';

    document.getElementById('bmi-result').textContent = `مؤشر كتلة الجسم: ${bmi.toFixed(1)} (${status}).`;
}

document.getElementById('get-ai-advice').addEventListener('click', async () => {
    const userInput = document.getElementById('user-input').value;

    if (!userInput) {
        alert('يرجى إدخال مشكلتك الصحية!');
        return;
    }

    // محاكاة ذكاء اصطناعي
    const advice = await getAIAdvice(userInput);
    document.getElementById('ai-advice-result').textContent = advice;
});

async function getAIAdvice(userInput) {
    // محاكاة الاستجابة
    return `نصيحة: حاول تقليل السكر في طعامك وزيادة شرب الماء.`;
}
