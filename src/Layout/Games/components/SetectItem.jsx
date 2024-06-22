export default function SelectItem({
  name = 'item', 
  icon = 'https://cusoft.tech/wp-content/uploads/2024/05/menu.png'
  }) {
  return (
    <div style={{
      padding: '0.4rem 1rem',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      gap: '1rem',
      borderRadius: '0.3rem',
      border: '1px solid var(--mainBackgroundColor3)',
    }}>
      <p>{name}</p>
      <img style={{width: '1.3rem'}} src={icon} alt={name} title={name}/>
    </div>
  )
}
