'use client';
import Image from 'next/image'
import styles from './page.module.scss'
import Collapsable from '../../component/collapsable'
import { appStoreCTA, googlePlayCTA } from '../../component/cta'
import Mockup from '../../component/mockup'
import Navigator from '../../component/navigator'
import Underline from '../../component/animation/underline'
import Highlight from '../../component/animation/highlight';
import { ReactNode } from 'react';
import Emphasize from '../../component/animation/emphasize';
import Fade from '../../component/animation/fade';
import Slide from '../../component/animation/slide';


export default function Home() {
  return (<>
    <LandingPageTitle />
    <HookingSection />
    <ReviewSection />
    <DailyDajeong />
    <DailyMissions />
    <DajeongPoint />
    <Features />
    <DownloadNow />
    <DajeongTeam />
    <FAQSection />
    <Footer />
    <Navigator />
  </>
  )
}

function LandingPageTitle({ }) {
  return <section className={styles.title_section}>
    <div className="wrapper vFlex jc ac" style={gapStyle(50)}>
      <h1 className='tc'>가족과 함께 하루 5분,<br />우리 가족 <Highlight delay={1} color='#ffc537'>다정한 대화</Highlight>의 시작</h1>
      <div className="hFlex">
        {appStoreCTA()}
        {googlePlayCTA()}
      </div>
    </div>
  </section>
}

function LandingPageSection({
  children,
  grey = false,
}: {
  children: React.ReactNode,
  grey?: boolean,
}) {
  return <section className={`${styles.body_section} ${grey ? styles.grey : ''}`}>
    <div className="wrapper">{children}</div>
  </section>
}

function HookingSection() {

  return <LandingPageSection>
    <div className="vFlex" style={gapStyle(20)}>
      <img src="https://em-content.zobj.net/source/apple/354/thinking-face_1f914.png" alt="wonderingFace" width={70} height={70} />
      <h2>나는 <Highlight delay={0.5} color='#ff5353'>우리 가족</Highlight>에 대해<br className='mobile' /> 얼마나 알고 있을까?</h2>
      <p className="tc">부모님의 어릴적 꿈
        <Slide delay={1.5} size={30} href='https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/People/Astronaut.png' />
        을, 자녀가 요즘 즐겨 듣는 곡
        <Slide delay={2.5} size={30} href='https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Objects/Musical%20Notes.png' />
        을, 알고 계신가요?<br />
        다정은 서로에 대한 이해가 화목한 가정으로의 첫 걸음이라고 믿고 있어요.<br />
        다정에서 나에 대해 말해주고, <Underline delay={3.5} color={'#ec694e'}>가족에 대해 들어보세요!</Underline>
      </p>
    </div>
  </LandingPageSection>
}

function ReviewSection() {

  return <LandingPageSection grey>
    <div className="vFlex">
      <div className="vFlex" style={gapStyle(15)}>
        <h2>다정을 이용해보신 분들의 후기</h2>
        <p>먼저 다정 서비스를 이용해보신 가족분들은 이렇게 느끼셨어요.</p>
      </div>
      <div style={{ height: 50 }}></div>
      <div className={styles.reviewContainer}>
        <ReviewCard
          title='소소한 이야깃거리가 생겨요'
          content={<span>맘으로는 연락 자주 해야지, 대화 많이 해야지 하면서도 성격상 특별한 일이 없으면 일상적인 대화로는 무슨 얘기를 해야 하는지 조금 어려워하는 편인데 하루에 하나씩 소소하게 이야깃거리를 줘서 좋았어요. 꾸준히 잠깐씩이라도 연락하게 되니까 조금이나마 <Emphasize delay={1}>가족들과 친해진 기분</Emphasize>이 들어서 좋습니다!</span>}
          id='review0'
          row={1}
          column={1}
        />
        <ReviewCard
          title='단톡방에서 말이 많아졌어요 🤣'
          content={<span>테스터로 한 달 간 다정을 사용해봤습니다, 다정을 신청한 이유는 저는 자취, 동생은 기숙사로 다들 집에 갈 시간이 없고 가족들이랑 이야기를 나눌 기회가 없어서 억지로라도 해보자라는 마음으로 시작하게 됐는데, 결과는 대성공입니다.<br className='desktop' /><br className='desktop' />남자친구나 친구들이 뭘 좋아하는 지는 알고 있었지만 엄마아빠가 뭘 좋아하시는 지는 모르고 있었다는 것도 알게 됐고, 엄마아빠는 저와 같은 나이일 때 어떤 생각을 하셨었는 지도 알게 되었어요, 다정에서 뿐만 아니라 저희 단톡방 자체가 굉장히 말이 많아지고 화목해졌습니다.<br className='desktop' /><br className='desktop' />4주 간 테스트가 진행됐다는 것에 굉장히 아쉽고 정식 출시만을 기다리고 있네용,,, 정말 이런 서비스 만들어주셔서 감사하고 <Emphasize delay={1}>많은 가족들이 꼭 써봤으면</Emphasize> 좋겠습니다</span>}
          id='review1'
          row={2}
          column={1}
        />
        <ReviewCard
          title='가족들의 생각에 대해 알게 됐어요'
          content={<span>어느 날 동생이 가족에게 다정을 사용하자고 했을 때는 이걸 왜 해야 하지 싶었습니다. 매일 미션에 답변해야 하는 것이 귀찮았고, 다정이 가족을 화목하게 만들어줄 수 있을 거라는 효과에 대해서도 의문이 들었기 때문입니다. 그래서 저는 초반에는 잘 사용하지 않았습니다.<br className='desktop' /><br className='desktop' />그런데 부모님과 동생은 꾸준히 미션에 참여했고, 그 결과 가족 간 소통이 늘어난 게 보였습니다. 어느 순간부터는 저도 열심히 다정을 사용하게 됐고, 덕분에 지금까지는 <Emphasize delay={1.5}>잘 몰랐던 가족의 생각, 취향</Emphasize> 등에 대해 알 수 있게 돼 매우 좋았습니다.<br className='desktop' /><br className='desktop' />참여를 열심히 할수록 다정 포인트가 쌓이는데, 저희는 포인트를 키링과 교환했습니다. 퀄리티도 좋고 귀여워서 매우 만족스러워 가방에 달고 다닙니다. 좋은 서비스를 제공해주셔서 감사하고 화이팅하세요!</span>}
          id='review2'
          row={2}
          column={1}
        />
        <ReviewCard
          title='색다른 대화를 할 수 있었어요'
          content={<span>사실 저는 부모님들과 대화가 적지 않은 편이라 별다른 기대 없이 시작했었는데, 서비스를 이용하면서 <Emphasize delay={2}>부모님이 좋아하는 게 뭔지, 요즘 무슨 생각을 하시는지</Emphasize> 등등 많은 것을 알게 되어 좋았습니다! 저희 가족 카톡방에서 이제는 단순히 오늘 밥 먹었냐 등의 대화를 넘어서서, 다정에서 던져준 대화 주제를 바탕으로 더 많은 이야기를 나누고 있어요ㅎㅎ 좋은 기회 제공해주셔서 감사합니다!</span>}
          id='review3'
          row={1}
          column={1}
        />
      </div>
    </div>
  </LandingPageSection>
}

function ReviewCard({
  title,
  content,
  id,
  row,
  column,
}: {
  title: string,
  content: ReactNode,
  id: string,
  row: number,
  column: number,
}) {

  const style = {
    '--row': row,
    '--column': column,
  } as React.CSSProperties

  return (
    <div className={`vFlex as ${styles.reviewCard}`} style={style}>
      <h5>{title}</h5>
      <span>⭐⭐⭐⭐⭐</span>
      <p className='small'>{content}</p>
    </div>
  )
}

function DailyDajeong() {

  return (
    <LandingPageSection>
      <div className={styles.dailyDajeong}>
        <div className="vFlex as" style={gapStyle(30)}>
          <h4>다정한 쪽지</h4>
          <h2>하루 5분,<br />가족과 함께<br />다정한 <Highlight delay={0} color='#24bd57'>일문일답</Highlight></h2>
        </div>
        <div className={styles.mockupContainer}>
          <Mockup img='/assets/image/Screen01.jpg' />
          <Mockup img='/assets/image/Screen02.jpg' />
        </div>
        <p>
          가족들과 함께 <Underline delay={0.75} color='#ff5353'>다정의 질문</Underline>에 답해보세요.<br />
          미처 몰랐던 가족들의 취향이나 생각을<br />
          알아보고 다정 포인트도 얻을 수 있어요.
        </p>
      </div>
    </LandingPageSection>
  )
}

function MissionType({
  caption,
  accentColor,
  title,
  comment,
  icon,
  img,
  reverse = false,
}: {
  caption: string,
  accentColor: string,
  title: string,
  comment: string,
  icon: string,
  img: string,
  reverse?: boolean,
}) {

  const titles = title.split('\\n').map((line, i) => <span key={i}>{line}<br /></span>)
  const comments = comment.split('\\n').map((line, i) => <span key={i}>{line}<br /></span>)

  return (
    <div className={`${styles.missionType} ${reverse ? styles.reverse : ''}`}>
      <div className='vFlex as'>
        <h4 style={{ color: accentColor }}>
          {caption}
          <Slide delay={0.6} size={40} href={icon} />
        </h4>
        <h3>{titles}</h3>
        <p>{comments}</p>
      </div>
      <img src={img} alt={icon} />
    </div>
  )
}

function DailyMissions() {

  return (
    <LandingPageSection grey>
      <div className="vFlex as">
        <div className="vFlex as" style={gapStyle(30)}>
          <h4>데일리 미션</h4>
          <h2>다정이 정성스레 준비한<br />따뜻하고 재치있는<br /><Highlight delay={0.5} color='#5190ff'>다양한 미션</Highlight>들</h2>
        </div>
        <MissionType
          caption='추억필름'
          accentColor='#54C043'
          title='평범한 일상을\n특별하게 추억하기'
          comment='오늘의 기분은 어땠나요?\n
          순간을 특별하게 기록하고\n
          가족들과 공유해보세요'
          icon='https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Objects/Camera%20with%20Flash.png'
          img='https://static.toss.im/assets/homepage/newtossim/section1_2_01.png'
        />
        <MissionType
          caption='음성편지'
          accentColor='#7552DA'
          title='가족에게 따뜻한 말 한 마디,\n다정이 전해드려요'
          comment='직접 하기에는 부끄러운 말이라면,\n
          음성편지로 전해보세요.\n
          글로는 느낄 수 없는 마음을 전해드려요'
          icon='https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Smilies/Love%20Letter.png'
          img='https://static.toss.im/assets/homepage/newtossim/section1_2_01.png'
          reverse
        />
        <MissionType
          caption='타임캡슐'
          accentColor='#2AA6DE'
          title='1달 전의 딸에게서\n편지가 도착했어요!'
          comment='미래의 가족에게 편지를 적고,\n
          과거의 가족에게 편지를 받압보세요!\n
          평상시 나눌 수 없던 말을 전할 수 있을 거에요'
          icon='https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Travel%20and%20places/Alarm%20Clock.png'
          img='https://static.toss.im/assets/homepage/newtossim/section1_2_01.png'
        />
      </div>
    </LandingPageSection>
  )
}

function DajeongPoint() {
  return (
    <LandingPageSection>
      <div className={styles.dajeong_point_wrap}>
        <div className="vFlex as js" style={gapStyle(30)}>
          <h4>다정 포인트</h4>
          <h2>답변만 해도<br />차곡차곡 쌓이는<br /><Highlight delay={0.5} color='#33e675'>다정 포인트</Highlight></h2>
        </div>
        <Mockup img='/assets/image/Screen02.jpg' />
        <div className="vFlex as je" style={gapStyle(40)}>
          <h2>깜짝 <Fade delay={0.5}>생일선물,</Fade><br />다함께 <Fade delay={1}>외식,</Fade><br />아니면 <Fade delay={1.5}>여행?</Fade></h2>
          <p>가족들과 다정한 시간을 보내면 쌓은 다정 포인트는<br />다정 스토어에서 사용할 수 있어요.<br />어떤 곳에 사용할 수 있을지 기대되지 않나요?</p>
        </div>
      </div>
    </LandingPageSection>
  )
}

function Feature({
  title,
  description,
  color,
  row,
  column,
  light = false,
}: {
  title: string,
  description: string,
  color: string,
  row: number,
  column: number,
  light?: boolean,
}) {

  const style = {
    backgroundColor: color,
    '--row': row,
    '--col': column,
  } as React.CSSProperties

  return (
    <div className={`${styles.feature} ${light ? styles.light : ''}`} style={style}>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  )
}

function Features() {
  return (
    <LandingPageSection grey>
      <div className="vFlex" style={gapStyle(60)}>
        <h2 className='tc'>다정에서 할 수 있는<br /><Underline delay={0.75} color='#ff5353'>다양한 일들</Underline></h2>
        <div className={styles.featuresGrid}>
          <Feature
            title='다정한 쪽지 / 스페셜 미션'
            description='다정이 제공하는 질문에 답해보고, 서로의 답변을 확인해보세요! 서로를 더 깊이 알아가는 시간을 가질 수 있을 거예요.'
            color='#566cff'
            row={1}
            column={2}
          />
          <Feature
            title='다정한 커뮤니티'
            description='같은 관심사를 가진 다른 가족들과 일상의 소소한 이야기를 공유해보세요!'
            color='#ffcf31'
            row={1}
            column={1}
            light
          />
          <Feature
            title='아카이빙'
            description='다정이 제공하는 질문에 답해보고, 서로의 답변을 확인해보세요! 서로를 더 깊이 알아가는 시간을 가질 수 있을 거예요.'
            color='#70f3cb'
            row={2}
            column={1}
            light
          />
          <Feature
            title='컨텐츠 공유'
            description='다정이 제공하는 질문에 답해보고, 서로의 답변을 확인해보세요! 서로를 더 깊이 알아가는 시간을 가질 수 있을 거예요.'
            color='#0bc2d4'
            row={1}
            column={2}
          />
          <Feature
            title='다정 알리미'
            description='다정이 제공하는 질문에 답해보고, 서로의 답변을 확인해보세요! 서로를 더 깊이 알아가는 시간을 가질 수 있을 거예요.'
            color='#ff5c56'
            row={1}
            column={2}
          />
          <Feature
            title='다정 스토어'
            description='다정 포인트로 우리 가족만의 포토앨범, 캘린더 등 다양한 제품을 구매해보세요.'
            color='#805dfc'
            row={1}
            column={3}
          />
        </div>
      </div>
    </LandingPageSection>
  )
}

function DownloadNow() {
  return (
    <LandingPageSection>
      <div className="vFlex" style={gapStyle(30)}>
        <h2>가족과 함께하는 다정한 일상, 지금 바로 시작해보세요!</h2>
        <div className="hFlex">
          {appStoreCTA()}
          {googlePlayCTA()}
        </div>
      </div>
    </LandingPageSection>
  )
}

function DajeongMember({
  name,
  role,
  img,
}: {
  name: string,
  role: string,
  img: string,
}) {
  return (
    <div className={styles.dajeongMember}>
      <img src={img} alt={name} />
      <h5>{name}</h5>
      <p>{role}</p>
    </div>
  )
}

function DajeongTeam() {
  return (
    <LandingPageSection grey>
      <div className="vFlex ast" style={gapStyle(80)} id='team'>
        <div className="vFlex" style={gapStyle(30)}>
          <h2 className={styles.teamTitle}><Underline delay={0.5} color='#ff5353'>다정을 만드는 사람들</Underline> <Slide delay={1.1} href='https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/People/Woman%20Technologist.png' size={70} /></h2>
          <p className='tc'>
            팀원소개글 어쩌구저쩌구 블라블라 아래는 채널톡 카피<br />
            만드는 사람이 곧 고객이 되어야 그 비즈니스가 성장할 수 있다고 믿어요.<br />
            만든 걸 쓰고, 쓸 걸 만드는 채널팀을 만나보세요.
          </p>
        </div>
        <div className="hFlex ja" style={gapStyle(20)}>
          <DajeongMember
            name='권민재'
            role='Backend 개발'
            img='https://i.pinimg.com/564x/64/25/39/6425396643768ca5c913553addab5b3b.jpg'
          />
          <DajeongMember
            name='박제희'
            role='기획/디자인'
            img='https://i.pinimg.com/564x/8a/93/db/8a93db9916487bf81415db5919a7f8a5.jpg'
          />
          <DajeongMember
            name='서평야'
            role='쩌리늅늅'
            img='https://i.pinimg.com/564x/39/48/76/394876e0e2129f959bd910b65da6f3f8.jpg'
          />
          <DajeongMember
            name='정세은'
            role='기획/마케팅'
            img='https://i.pinimg.com/564x/70/46/aa/7046aa18516704eee882c24f6e9881d1.jpg'
          />
        </div>
      </div>
    </LandingPageSection>
  )
}

function FAQSection() {

  return (
    <LandingPageSection>
      <div className="vFlex ast" style={gapStyle(30)}>
        <div className="vFlex">
          <h2>다정 FAQ</h2>
          <p>다정에 대해 궁금한 점이 있으신가요?</p>
        </div>
        <div className="vFlex ast" style={gapStyle(20)}>
          <Collapsable category='사용 방법' categoryColor='#18a5a5' title='다정은 어디서 쓸 수 있나요?'>
            <p>
              다정은 아이폰과 갤럭시 등의 안드로이드 기기에서 사용할 수 있어요. 아이폰이라면 앱스토어에서, 안드로이드라면 구글 플레이스토어에서 다운받으실 수 있어요.
            </p>
          </Collapsable>
          <Collapsable category='사용 방법' categoryColor='#18a5a5' title='다정 서비스는 무료인가요?'>
            <p>
              현재 다정의 모든 기능들은 무료로 사용하실 수 있어요. 다만, 추후에 추가될 유료 기능들이 있을 수 있으니 참고해주세요.
            </p>
          </Collapsable>
          <Collapsable category='FAQ' categoryColor='#3182f6' title='질문을 여기에 적고'>
            <p>
              아래에는 답변을 이렇게 적어주세용.<br />
              <br />
              강조가 필요한 내용이라면 <span>이런 식으로</span> 강조표시를 할 수 있어요.
            </p>
          </Collapsable>
        </div>
      </div>
    </LandingPageSection>
  )

}

function Footer() {
  return (
    <LandingPageSection grey>
      <div className={styles.footer}>
        <h5>고객센터</h5>
        <p><span>전화</span>010-1234-5678</p>
        <p><span>이메일</span>contactdajeong@gmail.com</p>
        <p className='tc'>
          더 다정한 순간을 모아<br />
          더 다정한 매일을 만들고,<br />
          더 다정한 세상을 소망합니다.
        </p>
        <div className="hFlex">
          <a href="/">이용약관</a>
          |
          <a href="/">개인정보 처리방침</a>
        </div>
      </div>
    </LandingPageSection>
  )
}


const gapStyle = (gap: number) => ({ '--gap': `${gap}px` } as React.CSSProperties)