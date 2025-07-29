import StudentCard from "../components/StudentCard"

export const StudentList = [
    { id: 1, name: "Hamroz", surname: "Nuriddinov", age: 19, img: "https://picsum.photos/id/22/800/800", teacherId: 1 },
    { id: 2, name: "Jamshid", surname: "Akramov", age: 20, img: "https://picsum.photos/id/100/800/800", teacherId: 1 },
    { id: 3, name: "Sarvar", surname: "Azamov", age: 18, img: "https://picsum.photos/id/203/800/800", teacherId: 1 },
    { id: 4, name: "Ulug'bek", surname: "Rahmatullayev", age: 19, img: "https://picsum.photos/id/204/800/800", teacherId: 1 },
    { id: 5, name: "Dilnoza", surname: "Rahmatullayeva", age: 17, img: "https://picsum.photos/id/18/800/800", teacherId: 2 },
    { id: 6, name: "Laylo", surname: "Ismatullayeva", age: 16, img: "https://picsum.photos/id/206/800/800", teacherId: 2 },
    { id: 7, name: "Muslima", surname: "Yoqubova", age: 16, img: "https://picsum.photos/id/217/800/800", teacherId: 2 },
    { id: 8, name: "Nigora", surname: "Xasanova", age: 19, img: "https://picsum.photos/id/208/800/800", teacherId: 2 },
    { id: 9, name: "Abdulloh", surname: "Sultonmurodov", age: 26, img: "https://picsum.photos/id/209/800/800", teacherId: 3 },
    { id: 10, name: "Ulug'bek", surname: "Nurmatov", age: 16, img: "https://picsum.photos/id/210/800/800", teacherId: 3 },
    { id: 11, name: "Raxmatulloh", surname: "Raxmatov", age: 16, img: "https://picsum.photos/id/211/800/800", teacherId: 3 },
    { id: 12, name: "Boboyor", surname: "Normuhammedov", age: 24, img: "https://picsum.photos/id/213/800/800", teacherId: 3 }
]

const Students = () => {
  return (
    <div className="containers flex justify-center gap-[20px] flex-wrap p-2 bg-red-700">
      {StudentList.map(item => <StudentCard key={item.id} item={item}/> )}
    </div>
  )
}

export default Students
