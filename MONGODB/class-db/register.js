// create class collection
// use class

db.createCollection('students');

// insert into students collection

db.students.insertMany({
    '_id': '1',
    'stu_fname': 'ebrima',
    'stu_lname': 'touray',
    'stu_init': '',
    'stu_phone': '3119658',
    'stu_email': 'touraye07gmail.com',    
},
{
    '_id': '2',
    'stu_fname': 'alasana',
    'stu_lname': 'camara',
    'stu_init': '',
    'stu_phone': '2135451',
    'stu_email': 'alasanacamara@yahoo.com', 
},
{
    '_id': '3',
    'stu_fname': 'fatou',
    'stu_lname': 'jarju',
    'stu_init': '',
    'stu_phone': '7319053',
    'stu_email': 'jarju11@gmail.com', 
},
{
    '_id': '4',
    'stu_fname': 'lamin',
    'stu_lname': 'gibba',
    'stu_init': '',
    'stu_phone': '3521529',
    'stu_email': 'gibba339@gmail.com', 
},
{
        '_id': '5',
        'stu_fname': 'jankey',
        'stu_lname': 'jammeh',
        'stu_init': '',
        'stu_phone': '3451732',
        'stu_email': 'jankeyjammeh@gmail.com', 
},
{
    '_id': '6',
    'stu_fname': 'essu',
    'stu_lname': 'fonny',
    'stu_init': '',
    'stu_phone': '2628280',
    'stu_email': 'cookfonny@gmail.com'
},
{
    '_id': '7',
    'stu_fname': 'sarjo',
    'stu_lname': 'saidykhan',
    'stu_init': '',
    'stu_phone': '3797107',
    'stu_email': 'sarjosaidykhan100@gmail.com'
},
{
    '_id': '8',
    'stu_fname': 'ismiala',
    'stu_lname': 'tonna',
    'stu_init': '',
    'stu_phone': '2425949',
    'stu_email': 'ismailatorres@yahoo.com'
},
{
    '_id': '9',
    'stu_fname': 'gibril',
    'stu_lname': 'ceesay',
    'stu_init': '',
    'stu_phone': '2151977',
    'stu_email': 'gibrilceesay96@gmail.com'
},
{
    '_id': '10',
    'stu_fname': 'aisha',
    'stu_lname': 'drammeh',
    'stu_init': '',
    'stu_phone': '2052619',
    'stu_email': 'drammehisa4@gmail.com'
});

// create class reportbook
db.createCollection('report');

// insert into reportbook

db.report.insertOne({
    '_id': '1',
    'course': 'web1',
    'lecturer': 'mr camara',
    'start_time': '10:30',
    'stop_time': '1:30',
    'date': new Date('2020-06-15'),
    'stu_present': [
        'ebrima touray', 'alasna camara', 'jankey jammeh', 'lamin gibba', 'sarjo saidykhan'
    ]
});

db.report.insertOne({
    '_id': '2',
    'course': 'networknig1',
    'lecturer': 'mr alan',
    'start_time': '10:30',
    'stop_time': '1:30',
    'date': new Date('2020-06-18'),
    'stu_present': [
        'ebrima touray', 'alasna camara', 'jankey jammeh', 'lamin gibba', 'sarjo saidykhan', 'fatou jarju', 'aisha drammeh'
    ]
});

db.report.insertOne({
    '_id': '3',
    'course': 'java1',
    'lecturer': 'mr touray',
    'start_time': '09:30',
    'stop_time': '1:30',
    'date': new Date('2020-06-20'),
    'stu_present': [
        'ebrima touray', 'alasna camara', 'jankey jammeh', 'lamin gibba', 'sarjo saidykhan', 'fatou jarju', 'aisha drammeh', 'essu fonny', 'ismaila tonna', 'gibril cessay'
    ]
});

db.report.insertOne({
    '_id': '4',
    'course': 'pld',
    'lecturer': 'mr loum',
    'start_time': '2:30',
    'stop_time': '5:30',
    'date': new Date('2020-06-19'),
    'stu_present': [
        'ebrima touray', 'alasna camara', 'jankey jammeh', 'sarjo saidykhan', 'fatou jarju', 'aisha drammeh', 'essu fonny', 'ismaila tonna', 'gibril cessay'
    ]
});


db.report.insertOne({
    '_id': '5',
    'course': 'database1',
    'lecturer': 'mr camara',
    'start_time': '10:30',
    'stop_time': '1:30',
    'date': new Date('2020-06-17'),
    'stu_present': [
        'ebrima touray', 'alasna camara', 'jankey jammeh', 'sarjo saidykhan', 'fatou jarju', 'aisha drammeh', 'essu fonny', 'ismaila tonna', 'gibril cessay', 'lamin gibba'
    ]
});


