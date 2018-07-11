<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Global Header & Footer Using PHP</title>
    <link rel='stylesheet' id='utilitynav-css'  href='https://www.northeastern.edu/nuglobalutils/common/css/headerfooter.css' media='all' />
  </head>

  <body>

    <div id="nu__globalheader">
      <?php
        $url = 'https://www.northeastern.edu/resources/components/?return=main-menu';
        $curl = curl_init($url);

        curl_setopt($curl, CURLOPT_RETURNTRANSFER, TRUE);
        echo curl_exec($curl);
        curl_close($curl);
      ?>
    </div>

    <div id="nu__global-footer">
      <?php

        $url = 'https://www.northeastern.edu/resources/includes/?r=footer';
        $curl = curl_init($url);

        curl_setopt($curl, CURLOPT_RETURNTRANSFER, TRUE);
        echo curl_exec($curl);
        curl_close($curl);
      ?>
    </div>
  </body>

  <script type="text/javascript" src="https://www.northeastern.edu/nuglobalutils/common/js/navigation-min.js"></script>
</html>
