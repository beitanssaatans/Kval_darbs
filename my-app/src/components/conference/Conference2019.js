import PropTypes from 'prop-types'
import React, { Component } from 'react'
import {
  Button,  Container,
  Grid, Header, Icon,
  Image, List, Menu,
  Responsive, Segment,
  Sidebar, Visibility } from 'semantic-ui-react'


const getWidth = () => {
  const isSSR = typeof window === 'undefined'

  return isSSR ? Responsive.onlyTablet.minWidth : window.innerWidth
}


const HomepageHeading = ({ mobile }) => (
  <Container text>
    <Header
      as='h1'
      content='TEDxRIGA 2019'
      inverted
      style={{
        fontSize: mobile ? '2em' : '4em',
        fontWeight: 'normal',
        marginBottom: 0,
        marginTop: mobile ? '1.5em' : '3em',
        
      }}
    />
    <Header
      as='h2'
      content='Bring the light'
      inverted
      style={{
        fontSize: mobile ? '1.5em' : '1.7em',
        fontWeight: 'normal',
        marginTop: mobile ? '0.5em' : '1.5em',
      }}
      id="top"
    />
    
      <a href='https://www.eventbrite.com/e/tedxriga-2019-tickets-59227049700'>
        <Button primary size='huge' color='#e62b1e' >
          GET YOUR TICKET
        <Icon name='right arrow' />
       </Button>
      </a>
      
  </Container>
)

HomepageHeading.propTypes = {
  mobile: PropTypes.bool,
}


class DesktopContainer extends Component {
  state = {}

  hideFixedMenu = () => this.setState({ fixed: false })
  showFixedMenu = () => this.setState({ fixed: true })

  render() {
    const { children } = this.props
    const { fixed } = this.state

    return (
      <Responsive getWidth={getWidth} minWidth={Responsive.onlyTablet.minWidth}>
        <Visibility
          once={false}
          onBottomPassed={this.showFixedMenu}
          onBottomPassedReverse={this.hideFixedMenu}
        >
          <Segment
            inverted
            textAlign='center'
            style={{ minHeight: 700, padding: '1em 0em' }}
            vertical
          >
            <Menu
              fixed={fixed ? 'top' : null}
              inverted={!fixed}
              pointing={!fixed}
              secondary={!fixed}
              size='large'
            >
              <Container>
              <a href="#top" ><Menu.Item as='a' active>Home</Menu.Item></a>
              <a href="#speakers" ><Menu.Item as='a' >Speakers</Menu.Item></a>
              <a href="#partners" ><Menu.Item as='a'>Partners</Menu.Item></a>
              <a href="#contacts" ><Menu.Item as='a'>Contact</Menu.Item></a>
              </Container>
            </Menu>
            <HomepageHeading />
          </Segment>
        </Visibility>
        {children}
      </Responsive>
    )
  }
}

DesktopContainer.propTypes = {
  children: PropTypes.node,
}

class MobileContainer extends Component {
  state = {}

  handleSidebarHide = () => this.setState({ sidebarOpened: false })

  handleToggle = () => this.setState({ sidebarOpened: true })

  render() {
    const { children } = this.props
    const { sidebarOpened } = this.state

    return (
      <Responsive
        as={Sidebar.Pushable}
        getWidth={getWidth}
        maxWidth={Responsive.onlyMobile.maxWidth}
      >
        <Sidebar
          as={Menu}
          animation='push'
          inverted
          onHide={this.handleSidebarHide}
          vertical
          visible={sidebarOpened}
        >
          <Menu.Item as='a' active>
            Home
          </Menu.Item>
          <Menu.Item as='a' >Speakers</Menu.Item>
           <Menu.Item as='a'>Partners</Menu.Item>
          <Menu.Item as='a'>Contact</Menu.Item>
        </Sidebar>

        <Sidebar.Pusher dimmed={sidebarOpened}>
          <Segment
            inverted
            textAlign='center'
            style={{ minHeight: 350, padding: '1em 0em' }}
            vertical
          >
            <HomepageHeading mobile />
          </Segment>

          {children}
        </Sidebar.Pusher>
      </Responsive>
    )
  }
}

MobileContainer.propTypes = {
  children: PropTypes.node,
}

const ResponsiveContainer = ({ children }) => (
  <div>
    <DesktopContainer>{children}</DesktopContainer>
    <MobileContainer>{children}</MobileContainer>
  </div>
)

ResponsiveContainer.propTypes = {
  children: PropTypes.node,
}

const Conference2019 = () => (
  <ResponsiveContainer>
    <Segment style={{ padding: '8em 0em' }} vertical >
      <Grid container stackable verticalAlign='middle'>
        <Grid.Row>
          <Grid.Column width={8}>
            <Header as='h3' style={{ fontSize: '2em', color: 'white' }}>
              Save the date!
            </Header>
            <p style={{ fontSize: '1.33em', color: 'white' }} >
              Our 8th flagship event TEDxRiga 2019 will take place in exactly 8 months’ 
              time – November 22 at the National Library of Latvia. Through unique 
              TED-like 18 minute talks or less, a variety of 20+ speakers and performers 
              from different fields and backgrounds will share their Ideas Worth Spreading. 
              They are inspiring, thought-provoking and exciting. They will challenge your horizons, 
              make you laugh and even shed a tear.
            </p>
            <br/>
            <p style={{ fontSize: '1.33em', color: 'white' }}>
            Tickets are on sale now! Make sure you grab yours while you can and get ready 
            for an unmissable experience!
            </p>
          </Grid.Column>
          <Grid.Column floated='right' width={6}>
            <Image bordered rounded size='large' src='https://i0.wp.com/tedxriga.com/wp-content/uploads/2019/03/Banner.jpg?fit=1280%2C720g' />
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column textAlign='center'>
          <a href='https://www.eventbrite.com/e/tedxriga-2019-tickets-59227049700'>
            <Button size='huge'>Buy ticket</Button>
          </a>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>

    <Segment style={{ padding: '8em' }} vertical id="speakers">
      <Grid celled='internally' columns='equal' stackable>
            <Header as='h2' style={{ fontSize: '2em', color: 'white' }}>
              Speakers
            </Header>
        <Grid.Row textAlign='center'>
          <Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em' }}>
          <img class="ui centered medium image" src='http://2018.tedxriga.com/wp-content/uploads/sites/5/2018/10/Arturs_Miksons-370x520.jpg' />
          <p style={{ fontSize: '1.33em', color: 'white'}}>
        
              <b>Artūrs Miksons</b> Psychotherapist
            </p>
          </Grid.Column>
          <Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em' }}>
          <img class="ui centered medium image" src='http://2018.tedxriga.com/wp-content/uploads/sites/5/2018/10/Evija_Vebere-1-370x520.jpg' />
            <p style={{ fontSize: '1.33em', color: 'white'}}>
              
              <b>Evija Vēbere</b> Singer and songwriter 
            </p>
          </Grid.Column>
          <Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em' }}>
          <img class="ui centered medium image" src='http://2018.tedxriga.com/wp-content/uploads/sites/5/2018/10/dins-vecans-370x520.jpg' />
            <p style={{ fontSize: '1.33em', color: 'white'}}>
              
              <b>Dins Vecans</b> Architect, runner
            </p>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>

    <Segment style={{ padding: '8em 0em' }} vertical id="partners">
      <Container text>
        <Header as='h3' style={{ fontSize: '2em', color:'white' }}>
          Partners
        </Header>
        <Grid celled='internally' columns='equal' stackable>
        <Grid.Row textAlign='center'>
         <Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em' }}>  
        <img class="ui centered medium image" src='https://i7.ifrype.com/business/344/737/v1369217451/ll_13344737.jpg' />
        </Grid.Column>
          <Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em' }}>
        <img class="ui centered medium image" src='http://www.logosvectorfree.com/wp-content/uploads/2017/12/Bentley-Logo-Bentley-Symbol.jpg' />
        </Grid.Column>
        </Grid.Row>
        </Grid>
        
        <Header as='h3' style={{ fontSize: '2em', color:'white' }}>
        We would love to hear from you!
        </Header>
        <p style={{ fontSize: '1.33em',  color:'white' }}>
        Please let us know your opinion, suggestion or any comment you might have!
        </p>
        <br/>
        <p style={{ fontSize: '1.33em',  color:'white' }}>
        Follow TED on at <a href="twitter.com/TEDTalks">Twitter</a>, or on  <a href="facebook.com/TED">Facebook</a>
        </p> 
        <a href="/">
        <Button as='a' size='large'>
          Lisent TED Talks
        </Button>
        </a>
      </Container>
    </Segment>

    <Segment inverted vertical style={{ padding: '5em 0em' }} id="contacts">
      <Container>
        <Grid divided inverted stackable>
          <Grid.Row>
            <Grid.Column width={3}>
              <Header inverted as='h4' content='About' />
              <List link inverted>
                <List.Item as='a'>Sitemap</List.Item>
                <List.Item as='a'>Contact Us</List.Item>
                <List.Item as='a'>Religious Ceremonies</List.Item>
                <List.Item as='a'>Gazebo Plans</List.Item>
              </List>
            </Grid.Column>
            <Grid.Column width={3}>
              <Header inverted as='h4' content='Services' />
              <List link inverted>
                <List.Item as='a'>Banana Pre-Order</List.Item>
                <List.Item as='a'>DNA FAQ</List.Item>
                <List.Item as='a'>How To Access</List.Item>
                <List.Item as='a'>Favorite X-Men</List.Item>
              </List>
            </Grid.Column>
            <Grid.Column width={7}>
              <Header as='h4' inverted>
                Footer Header
              </Header>
              <p>
                Extra space for a call to action inside the footer that could help re-engage users.
              </p>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    </Segment>
  </ResponsiveContainer>
)
export default Conference2019