/* eslint-disable react/prop-types */

//Importaciones externas
import Booton from '../../../../components/comuns/Booton';

function ItemSection3({
  img = '../../../../../public/img/hive_image.jpeg',
  title = 'title',
  description = 'description de la card x',
  btnImg = '../../../../../public/img/loading.gif',
  btnText = 'boton',
  btnUrl = '',
  imgstyles,
  altTitle,
  btnAltTitle
}) {

  const formatTitle = (txt) => {
    const words = txt.split(' ');
    return (
      <>
        {words.map((word, index) => {
          if (word.charAt(0) === '*') {
            return <b style={{color: 'var(--ButtonColor)'}} key={index}> {word.substring(1)} </b>;
          } else {
            return word + ' ';
          }
        })}
      </>
    );
  };

  const formatDescription = (text)=> {
    const words = text.split(' ');
    return (
      <>
        {
          words.map((word, index)=>{
            if(word.charAt(0) === '('){
              let newWord = word.replace(/\((.*?)\)/g, "( $1 )")
              return <b key={index} style={{color: 'var(--ButtonColor)'}}>{newWord}</b>
            } else {
              return word + ' '
            }
          })
        }
      </>
    )
  }

  return (
    <div className='presentation_section3_carousel_item' title={altTitle}>
      <div style={{ width: '100%', height: '13rem', overflow: 'hidden', borderRadius: '0.75rem' }}>
        <img title={altTitle} className='presentation_section3_carousel_item_img' alt={altTitle} style={{
          width: '100%',
          height: '100%',
          objectFit: 'contain',
          borderRadius: '0.75rem',
          ...imgstyles,
        }} src={img} />
      </div>

      <h4>{formatTitle(title)}</h4>
      <div>{formatDescription(description)}</div>

      <Booton
        styles={{
          width: '50%',
          height: '3rem',
          backgroundColor: 'transparent',
          border: '1px solid var(--mainBackgroundColor3)',
          marginTop: '2rem',
        }}
        url={btnUrl}
        title={btnAltTitle}
        text={(
          <div style={{
            width: '100%',
            height: '100%',
            display: 'flex',
            gap: '0.5rem',
            alignItems: 'center',
          }}>
            <img style={{ width: '1.5rem' }} src={btnImg} alt='' title='' />
            <p>{btnText}</p>
          </div>
        )}
      />
    </div>
  );
}

export default ItemSection3;
