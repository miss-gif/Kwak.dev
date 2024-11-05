import styled from '@emotion/styled'

const HomeNotice = () => {
  return (
    <HomeNoticeStyled>
      <h3>공지</h3>
      <div>
        <h4>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum
          eligendi doloremque tenetur accusantium non repellat quisquam
          aspernatur ab adipisci dolorem animi eum facilis consequatur fuga,
          corrupti temporibus iste. Quia, vel!
        </h4>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum
          eligendi doloremque tenetur accusantium non repellat quisquam
          aspernatur ab adipisci dolorem animi eum facilis consequatur fuga,
          corrupti temporibus iste. Quia, vel!
        </p>
        <span>2022-12-22</span>
      </div>
    </HomeNoticeStyled>
  )
}

export default HomeNotice

const HomeNoticeStyled = styled.div`
  padding: 12px;
  border: 1px solid #333;
  border-radius: 10px;
  width: 500px;
  height: 140px;
  overflow: hidden;
`
