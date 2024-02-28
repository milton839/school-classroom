// import { useEffect, useState } from "react";
// import Student from "../Student/Student";
import StudentsTable from "./StudentsTable";
const students = [
    {
      "id": 1,
      "class": 1,
      "name": "Olimpia",
      "email": "owidger0@cbslocal.com",
      "gender": "Female",
      "grade": "A-",
      "percentage": 1
    },
    {
      "id": 1,
      "class": 2,
      "name": "Birch",
      "email": "bpetrelli1@123-reg.co.uk",
      "gender": "Male",
      "grade": "B",
      "percentage": 2
    },
    {
      "id": 1,
      "class": 3,
      "name": "Shermie",
      "email": "sedinboro2@fotki.com",
      "gender": "Genderfluid",
      "grade": "B",
      "percentage": 3
    },
    {
      "id": 1,
      "class": 4,
      "name": "Lyssa",
      "email": "lroze3@time.com",
      "gender": "Female",
      "grade": "A+",
      "percentage": 4
    },
    {
      "id": 1,
      "class": 5,
      "name": "Luis",
      "email": "ladamik4@abc.net.au",
      "gender": "Male",
      "grade": "A-",
      "percentage": 5
    },
    {
      "id": 2,
      "class": 1,
      "name": "Ofilia",
      "email": "oglastonbury5@hud.gov",
      "gender": "Female",
      "grade": "A+",
      "percentage": 6
    },
    {
      "id": 2,
      "class": 2,
      "name": "Ana",
      "email": "athaxter6@ibm.com",
      "gender": "Female",
      "grade": "A-",
      "percentage": 7
    },
    {
      "id": 2,
      "class": 3,
      "name": "Terry",
      "email": "tgilliard7@liveinternet.ru",
      "gender": "Male",
      "grade": "F",
      "percentage": 8
    },
    {
      "id": 2,
      "class": 4,
      "name": "Roxanna",
      "email": "rhardistry8@tripadvisor.com",
      "gender": "Female",
      "grade": "D",
      "percentage": 9
    },
    {
      "id": 2,
      "class": 5,
      "name": "Wells",
      "email": "woleksiak9@reddit.com",
      "gender": "Male",
      "grade": "A+",
      "percentage": 10
    },
    {
      "id": 3,
      "class": 1,
      "name": "Lotte",
      "email": "lrameya@oracle.com",
      "gender": "Female",
      "grade": "A+",
      "percentage": 11
    },
    {
      "id": 3,
      "class": 2,
      "name": "Conny",
      "email": "csilburnb@miitbeian.gov.cn",
      "gender": "Male",
      "grade": "C",
      "percentage": 12
    },
    {
      "id": 3,
      "class": 3,
      "name": "Vasily",
      "email": "vcantoc@unc.edu",
      "gender": "Male",
      "grade": "A+",
      "percentage": 13
    },
    {
      "id": 3,
      "class": 4,
      "name": "Juli",
      "email": "jdoughteryd@si.edu",
      "gender": "Female",
      "grade": "A+",
      "percentage": 14
    },
    {
      "id": 3,
      "class": 5,
      "name": "Felizio",
      "email": "fpigneye@sourceforge.net",
      "gender": "Male",
      "grade": "A+",
      "percentage": 15
    },
    {
      "id": 4,
      "class": 1,
      "name": "Cordie",
      "email": "ccrissilf@so-net.ne.jp",
      "gender": "Male",
      "grade": "B",
      "percentage": 16
    },
    {
      "id": 4,
      "class": 2,
      "name": "Kory",
      "email": "ktumultyg@miibeian.gov.cn",
      "gender": "Male",
      "grade": "A+",
      "percentage": 17
    },
    {
      "id": 4,
      "class": 3,
      "name": "Prent",
      "email": "pmcgannonh@techcrunch.com",
      "gender": "Male",
      "grade": "D",
      "percentage": 18
    },
    {
      "id": 4,
      "class": 4,
      "name": "Lloyd",
      "email": "lhinrichsi@a8.net",
      "gender": "Male",
      "grade": "A-",
      "percentage": 19
    },
    {
      "id": 4,
      "class": 5,
      "name": "Granville",
      "email": "gmaithj@gnu.org",
      "gender": "Male",
      "grade": "A+",
      "percentage": 20
    },
    {
      "id": 5,
      "class": 1,
      "name": "Amalita",
      "email": "auziellik@deliciousdays.com",
      "gender": "Female",
      "grade": "A-",
      "percentage": 21
    },
    {
      "id": 5,
      "class": 2,
      "name": "Dar",
      "email": "dclaydenl@engadget.com",
      "gender": "Male",
      "grade": "A-",
      "percentage": 22
    },
    {
      "id": 5,
      "class": 3,
      "name": "Gertie",
      "email": "gneillansm@psu.edu",
      "gender": "Female",
      "grade": "F",
      "percentage": 23
    },
    {
      "id": 5,
      "class": 4,
      "name": "Ethan",
      "email": "erolln@columbia.edu",
      "gender": "Male",
      "grade": "A-",
      "percentage": 24
    },
    {
      "id": 5,
      "class": 5,
      "name": "Erin",
      "email": "emoffetto@mlb.com",
      "gender": "Genderqueer",
      "grade": "C",
      "percentage": 25
    },
    {
      "id": 6,
      "class": 1,
      "name": "Vida",
      "email": "vpaskellp@ovh.net",
      "gender": "Female",
      "grade": "A",
      "percentage": 26
    },
    {
      "id": 6,
      "class": 2,
      "name": "Martita",
      "email": "mstutterq@soup.io",
      "gender": "Female",
      "grade": "A+",
      "percentage": 27
    },
    {
      "id": 6,
      "class": 3,
      "name": "Cedric",
      "email": "coylettr@washingtonpost.com",
      "gender": "Male",
      "grade": "D",
      "percentage": 28
    },
    {
      "id": 6,
      "class": 4,
      "name": "Kathrine",
      "email": "kwiggetts@pbs.org",
      "gender": "Female",
      "grade": "B",
      "percentage": 29
    },
    {
      "id": 6,
      "class": 5,
      "name": "Thaxter",
      "email": "tyesinovt@about.com",
      "gender": "Male",
      "grade": "D",
      "percentage": 30
    },
    {
      "id": 7,
      "class": 1,
      "name": "Carmelia",
      "email": "cspringu@elegantthemes.com",
      "gender": "Female",
      "grade": "B",
      "percentage": 31
    },
    {
      "id": 7,
      "class": 2,
      "name": "Georgette",
      "email": "gardlingv@baidu.com",
      "gender": "Female",
      "grade": "A-",
      "percentage": 32
    },
    {
      "id": 7,
      "class": 3,
      "name": "Les",
      "email": "lkitteridgew@twitpic.com",
      "gender": "Male",
      "grade": "F",
      "percentage": 33
    },
    {
      "id": 7,
      "class": 4,
      "name": "Lisle",
      "email": "lbinghamx@marriott.com",
      "gender": "Male",
      "grade": "A",
      "percentage": 34
    },
    {
      "id": 7,
      "class": 5,
      "name": "James",
      "email": "jcollobyy@blogs.com",
      "gender": "Male",
      "grade": "C",
      "percentage": 35
    },
    {
      "id": 8,
      "class": 1,
      "name": "Phedra",
      "email": "pbuchanz@abc.net.au",
      "gender": "Female",
      "grade": "A+",
      "percentage": 36
    },
    {
      "id": 8,
      "class": 2,
      "name": "Ninetta",
      "email": "nmaass10@tinypic.com",
      "gender": "Female",
      "grade": "C",
      "percentage": 37
    },
    {
      "id": 8,
      "class": 3,
      "name": "Kiah",
      "email": "kpaviour11@sourceforge.net",
      "gender": "Female",
      "grade": "B",
      "percentage": 45
    },
    {
      "id": 8,
      "class": 4,
      "name": "Berty",
      "email": "bsmorthwaite12@eepurl.com",
      "gender": "Male",
      "grade": "B",
      "percentage": 49
    },
    {
      "id": 8,
      "class": 5,
      "name": "Timofei",
      "email": "tbrafferton13@utexas.edu",
      "gender": "Male",
      "grade": "A",
      "percentage": 71
    },
    {
      "id": 9,
      "class": 1,
      "name": "Dominick",
      "email": "dlahy14@prnewswire.com",
      "gender": "Male",
      "grade": "A+",
      "percentage": 91
    },
    {
      "id": 9,
      "class": 2,
      "name": "Ulrick",
      "email": "ushord15@umn.edu",
      "gender": "Male",
      "grade": "F",
      "percentage": 30
    },
    {
      "id": 9,
      "class": 3,
      "name": "Alex",
      "email": "apaddle16@mozilla.com",
      "gender": "Female",
      "grade": "D",
      "percentage": 33
    },
    {
      "id": 9,
      "class": 4,
      "name": "Waylan",
      "email": "wvolante17@businessinsider.com",
      "gender": "Male",
      "grade": "A",
      "percentage": 79
    },
    {
      "id": 9,
      "class": 5,
      "name": "Isobel",
      "email": "icurrey18@taobao.com",
      "gender": "Female",
      "grade": "C",
      "percentage": 45
    },
    {
      "id": 10,
      "class": 1,
      "name": "Caryl",
      "email": "cdenzey19@ftc.gov",
      "gender": "Male",
      "grade": "A+",
      "percentage": 80
    },
    {
      "id": 10,
      "class": 2,
      "name": "Maris",
      "email": "mmarchington1a@nsw.gov.au",
      "gender": "Female",
      "grade": "A-",
      "percentage": 68
    },
    {
      "id": 10,
      "class": 3,
      "name": "Margareta",
      "email": "mhuyhton1b@wufoo.com",
      "gender": "Female",
      "grade": "B",
      "percentage": 56
    },
    {
      "id": 10,
      "class": 4,
      "name": "Hewett",
      "email": "hhawkeswood1c@digg.com",
      "gender": "Male",
      "grade": "A",
      "percentage": 75
    },
    {
      "id": 10,
      "class": 5,
      "name": "Olenka",
      "email": "ogirardot1d@miitbeian.gov.cn",
      "gender": "Female",
      "grade": "A+",
      "percentage": 98
    }
  ]

const Students = () => {
//   const [students, setStudents] = useState([]);
//   // eslint-disable-next-line react-hooks/exhaustive-deps
//   useEffect(() => {
//     fetch("./public/data.JSON")
//       .then((res) => res.json())
//       .then((data) => setStudents(data));
//   }, []);

  const class1 = students.filter((t) => t.class == 1);
  const class2 = students.filter((t) => t.class == 2);
  const class3 = students.filter((t) => t.class == 3);
  const class4 = students.filter((t) => t.class == 4);
  const class5 = students.filter((t) => t.class == 5);
  return (
    <div>
        <div>Search Data</div>
      <StudentsTable cls={class1} classNumber={1} />
      <StudentsTable cls={class2} classNumber={2} />
      <StudentsTable cls={class3} classNumber={3} />
      <StudentsTable cls={class4} classNumber={4} />
      <StudentsTable cls={class5} classNumber={5} />
    </div>
  );
};

export default Students;
