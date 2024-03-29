## DateTime Formater


```
npm i pm-date-formater --save
```


```javascript
const dateFormater = require('pm-date-formater');

let todaysDate = new Date();
let universalDateFormat = "dd-MM-yyyy";
let universaltimeFormat = "hh:MM a";
let formatedDateTime = dateFormater.formatDate( todaysDate, 'dd/MM/yyyy HH:mm:ss');
//The above formatedDateTime will return date as (17/12/2019 17:58:00)

let formatedDate = dateFormater.formatDate( todaysDate, universalDateFormat);
//The above formatedDate will return date as (17-12-2019)

let formatedTime = dateFormater.formatDate( todaysDate, universaltimeFormat);
//The above formatedTime will return date as (17:58 PM)
```


### Default code for date-time format :

### Date Fromater :
* **d**       : return minimum digits eg: [ 1 , 12 ]
* **dd**      : return 2 digits + zero padded eg: [ 02, 25 ]

### Month Formater :
* **M**       : return minimum digit eg: [ 1 , 10 ]
* **MM**      : return 2 digits + zero padded eg: [ 01 , 10 ]
* **MMM**     : return Abbreviated eg: [ Jan, Sep ]
* **MMMM**    : return Wide eg: [ January, September ]

### Year Formater :
* **y**       : return minimum digit eg: [ 1999 , 2020 ]
* **yy**      : return 2 digits eg: [ 01 , 10 ]
* **yyyy**    : return Wide eg: [ 1999, 2020 ]

### Hour  Formater :
* **H**       : return minimum digit eg: [ 1 , 20 ]
* **HH**      : return 2 digits + zero padded eg: [ 01 , 21 ]
* **h**       : return minimum digit in 12 hour format eg: [ 1 , 12 ]
* **hh**      : return 2 digits + zero padded in 12 hour format eg: [ 01 , 10 ]

### Minute  Formater :
* **m**       : return minimum digit eg: [ 1 , 43 ]
* **mm**      : return 2 digits + zero padded eg: [ 08 , 53 ]

### Second  Formater :
* **s**       : return minimum digit eg: [ 1 , 43 ]
* **ss**      : return 2 digits + zero padded eg: [ 08 , 53 ]

### MiliSecond  Formater :
* **S**       : return minimum digit eg: [ 1 , 43 ]
* **SS**      : return 2 digits + zero padded eg: [ 08 , 88, 553 ]
* **SSS**     : return 3 digits + zero padded eg: [ 008, 083 , 553 ]

### Weekdays Formater :
* **WWW**     : return Abbreviated eg: [ Sun, Mon ]
* **WWWW**    : return Wide eg: [ Sunday, Monday ]

### Meridiem  Formater :
* **tt**       : return Meridiem eg: [ AM , PM ]
* **Note**    : If time is 24 Hour format it will remove the meridiem.