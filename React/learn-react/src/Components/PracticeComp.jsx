export function getImageUrl(imageId, size = 's') {
    return (
      'https://i.imgur.com/' +
      imageId +
      size +
      '.jpg'
    );
  }

  
export function ChildComp({
        src,
        alt,
        prof,
        awards,
        disc,
        name,
        imgSize = 70
}){

    return (
        <div>
      <section className="profile">
        <h2>{name}</h2>
        <img
          className="avatar"
          src={src}
          alt={alt}
          width={imgSize}
          height={imgSize}
        />
        <ul>
          <li>
            <b>Profession: </b> 
            {prof}
          </li>
          <li>
            <b>Awards: 4 </b> 
            {awards}
          </li>
          <li>
            <b>Discovered: </b>
            {disc}
          </li>
        </ul>
      </section>
    </div>
    )
}