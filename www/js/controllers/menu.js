

angular.module('azdineh.apps.controllers')
    .controller('MenuCtrl', function ($scope, $rootScope, Mimimsad) {
        $scope.menu = {};
        $scope.menu.activeItemStyle = function (item) {
            if (item.infocus) {
                return "mms-menu-item-atcive";
            }
        };
        $scope.menu.activeItem = function (index) {
            if (index > $scope.menu.items.length) {
                index = $scope.menu.items.length - 1;
            }
            $scope.menu.items.forEach(function (item) {
                item.infocus = false;
            }, this);
            $scope.menu.items[index].infocus = true;
        };
        $scope.menu.items = [
            {
                title: 'إقرأ كتابا',
                description: 'لمطالعة كتاب سماعيا',
                infocus: false
            },
            {
                title: 'شَغّل محاضرة مسجلة',
                description: 'لمتابعة إحدى المحاضرات المسجلة',
                infocus: false
            },
            {
                title: 'ما معنى كلمة -مصطلح ما',
                description: 'للإطلاع سماعيا عن معنى مصطلح ما',
                infocus: false
            },
            {
                title: 'سجّل ملاحظة أو سجل فكرة',
                description: 'لحفظ ملاحظة أو فكرة عابرة صوتيا',
                infocus: false
            },
            {
                title: 'إستعرض ما تيسر من القرآن الكريم',
                description: 'لإطلاق قراءة ما تيسر من القرآن الكريم بصوت قارئ يتم اختياره عشوائيا',
                infocus: false
            },
            {
                title: 'ما هي حالة الطقس هذه الأيام',
                description: 'لمعرفة درجة الحراة خلال الأسام الثلاثة القادمة',
                infocus: false
            },
            {
                title: 'كم الساعة',
                description: 'لمعرفة الوقت و تاريخ اليوم',
                infocus: false
            },
            {
                title: 'أعد جرد عناصر القائمة',
                description: 'لإعادة استماع لعناصر القائمة',
                infocus: false
            },
        ];

        var tmp = function () {
            console.log("Menu page entred..");
            Mimimsad.speak('we_in_main_menu', function () { }, function () {
                $scope.menu.activeItem(0);
                Mimimsad.explainCommand('cmd_0_read_a_book', 'for_0', function () {
                    $scope.menu.activeItem(1);
                    Mimimsad.explainCommand('cmd_1_run_a_conference', 'for_1', function () {
                        $scope.menu.activeItem(2);
                        Mimimsad.explainCommand('cmd_2_what_is_mean', 'for_2', function () {
                            $scope.menu.activeItem(3);
                            Mimimsad.explainCommand('cmd_3_save_a_note', 'for_3', function () {
                                $scope.menu.activeItem(4);
                                Mimimsad.explainCommand('cmd_4_quran', 'for_4', function () {
                                    $scope.menu.activeItem(5);
                                    Mimimsad.explainCommand('cmd_5_weather', 'for_5', function () {
                                        $scope.menu.activeItem(6);
                                        Mimimsad.explainCommand('cmd_6_what_time', 'for_6', function () {
                                            $scope.menu.activeItem(7);
                                            Mimimsad.explainCommand('cmd_7_repeat', 'for_7', function () {
                                            });
                                        });
                                    });
                                });
                            });
                        });
                    });
                });
            }, true);
        }


        //Mimimsad.speak($scope.menu.items[0].);
        $scope.$on('$ionicView.enter', function (e) {
            $timeout(function () {
                tmp();
            }, 2000);
        });

        //tmp();



    });
