 var jsondata = {"58": {
    "coursesNumber": 5,
    "coursesList": [
      [
        "Mathematics",
        208.0,
        210.0
      ],
      [
        "Sociology",
        513.0,
        515.0
      ],
      [
        "French",
        208.0,
        210.0
      ],
      [
        "Chemistry",
        110.5,
        112.0
      ],
      [
        "History",
        408.5,
        411.0
      ]
    ],
    "name": "BLANCA, BAHENA"}}
    
    window.onload = function(){
    var parseddata =JSON.parse(jsondata);
    $.getJSON("outputStudent.json",function(json){
      console.log(json);
    })