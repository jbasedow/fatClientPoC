<!DOCTYPE html>
<html lang="de">
    <head>
        <meta charset="utf-8" />
        <title>FatClientPoC</title>
        <link rel="stylesheet" type="text/css" href="/css/main.css">
        <link rel="stylesheet" type="text/css" href="/css/vendor/jquery-ui/redmond/jquery-ui-1.10.3.custom.css">
        </head>
    <body>
        <section class="calendar">
            <table>
                <tr>
                    <th>KW 32</th>
                    <th>00:00 - 23-59</th>
                </tr>
                <tr>
                    <th>MON</th>
                    <td class="day">
                        <div class="department-lane service">
                        </div>
                        <div class="department-lane kitchen">
                        </div>
                        <div class="department-lane door">
                        </div>
                    </td>
                </tr>
            </table>
        </section>

        <table id="container" border="1">
            <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Arbeitsbereich</th>
                <th># MA</th>
                <th>Start</th>
                <th>Ende</th>
            </tr>
        </table>

        <script type="text/javascript" src="/js/vendor/jquery-1.10.2.js"></script>
        <script type="text/javascript" src="/js/vendor/jquery-ui-1.10.3.custom.min.js"></script>
        <script type="text/javascript" src="/js/vendor/jquery.ui.touch-punch.js"></script>
        <script type="text/javascript" src="/js/vendor/underscore.js"></script>
        <script type="text/javascript" src="/js/vendor/backbone.js"></script>
        <script type="text/javascript" src="/js/main.js"></script>
     </body>
</html>
