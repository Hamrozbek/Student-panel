import { useNavigate } from "react-router-dom"

const StudentCard = ({ item }) => {
  const navigate = useNavigate()

  return (
    <div onClick={() => navigate(`${item.id}`)} className="cursor-pointer w-[300px] md:w-[400px] flex items-center gap-[10px] rounded-[10px] px-[8px] py-[5px] md:px-3 md:py-2 bg-[#333]">
      <img className="rounded-full w-[60px] md:w-[120px]" src={item.img} alt="img" width={300} height={200} />
      <div>
        <h2 className="text-white font-bold text-[15px] md:text-[18px]">{item.name} - {item.surname}</h2>
        <p className="text-white text-[18px]">Age: {item.age}</p>
      </div>
    </div>
  )
}

export default StudentCard
