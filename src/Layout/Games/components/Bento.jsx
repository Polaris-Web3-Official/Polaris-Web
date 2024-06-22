import CardGames from "./CardGames";
import ListGames from "./ListGames";
import '../style/games.css'
import SelectCategoryGame from "./SelectCategoryGame";

export default function Bento({data}) {
  return (
    <div className="games" style={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
    }}>
      <CardGames 
        data={data}
      />
      <SelectCategoryGame data={data}/>
      <ListGames 
        data={data}
      />
    </div>
  )
}
