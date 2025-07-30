import TeacherCard from "../components/TeacherCard"

export const teacherlist = [
  {
    id: 1,
    name: "Nurillo",
    surname: "Suyunboyev",
    stack: "Frontend",
    gmail: "nurillo@gmail.com",
    age: "25",
    image: "https://media.licdn.com/dms/image/v2/D4D03AQEkDan8PQH3kg/profile-displayphoto-shrink_200_200/B4DZSto6TJHYAc-/0/1738079971104?e=2147483647&v=beta&t=YemdLYXFcxsDU8Nx8K5TTpTVdMs7bRJS5hq-d5MEcac"
  },
  {
    id: 2,
    name: "Boburmirzo",
    surname: "Rasulov",
    stack: "Frontend",
    gmail: "boburmirzo@gmail.com",
    age: "25",
    image: "https://media.licdn.com/dms/image/v2/D4D03AQFzRY3rskvD6Q/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1678385675817?e=2147483647&v=beta&t=9NNAImd3qXPNx5wKTeEXoyLBeWYXRAMvl4sgHvA-560"
  },
  {
    id: 3,
    name: "Dilshod",
    surname: "Gaibnazarov",
    stack: "Backend",
    gmail: "dilshod@gmail.com",
    age: "30",
    image: "https://media.licdn.com/dms/image/v2/D4D03AQHtbsd9JaCIRQ/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1684503793191?e=2147483647&v=beta&t=TAbshb0SEcwIX6rpetPpM92fDQa-aSVHzBV3LohaONc"
  }

]

const Teachers = () => {

  return (
    <div className="containers md:flex space-y-[20px] items-center justify-center gap-[20px] py-3">
      {teacherlist.map(item => <TeacherCard key={item.id} item={item} />)}
    </div>
  )
}

export default Teachers
