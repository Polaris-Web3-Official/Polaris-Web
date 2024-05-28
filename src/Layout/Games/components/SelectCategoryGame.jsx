import '../style/selectCategoryGame.css'
import SelectItem from './SetectItem'

export default function SelectCategoryGame({data}) {
  return (
    <div className='select_category_game'>
      <SelectItem 
        name='Action'
      />
      <SelectItem 
        name='English'
      />
      <SelectItem 
        name='System'
      />
      <SelectItem 
        name='Price'
      />
    </div>
  )
}
