angular.module('azdineh.apps.controllers')
.controller('MainCtrl', function($scope,Mimimsad) {
var phrases=[
    "مرحبا بك في تطبيق م م ص، الذي تعني المرافق المتفاعل الصوتي. و هو متفاعل افتراضي يساعد على مطالعة الكتب و البحث عنها سماعيا.أيضا سيقوم التطبيق بالإجابة عن بعض الأسئلة اليومية. لِتَبْدَأَ قُلْ : أُدْخُل إلى القائمة الرئيسة. بعد الإشارة الصوتية"
];
Mimimsad.speak(phrases[0]);
});
