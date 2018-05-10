import React, { Component } from 'react'
import { withApp } from '@bt/Wrappers/AppWrapper'
import LeftMenu from '@/Components/LeftMenu'
import NavBar from '@bt/Components/NavBar'
import TopMenu from '@/Containers/TopMenu'

const Content = ({children}) => (
  <div className="content">
    {children}
  </div>
)

const PageSection = () => (
  <div className="pageSection">
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sed sollicitudin arcu. Sed tincidunt est tempus mattis molestie. Phasellus ullamcorper ut ligula vel lacinia. Nullam consectetur arcu vel risus dictum fermentum. Phasellus id justo sit amet lectus porttitor pulvinar blandit eu massa. Fusce iaculis eu massa a efficitur. Ut imperdiet posuere ligula, eu finibus ante scelerisque a. Nam in ultrices nunc. Ut fermentum ultrices velit, ut ullamcorper elit mollis sed. Sed imperdiet erat non facilisis condimentum. Duis non metus a nulla volutpat eleifend. Praesent condimentum, nunc id vestibulum vehicula, urna quam rutrum justo, quis lobortis nunc velit et massa. Quisque consequat vel dolor eget elementum. Vivamus tempus, quam nec volutpat viverra, ex mi sagittis purus, quis ultrices sapien elit nec justo. Maecenas euismod magna eget augue auctor, sed feugiat dolor pellentesque. In quis purus ut leo cursus interdum vitae vel nisi.

In ornare lacinia metus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam nulla velit, aliquam sit amet urna quis, egestas pellentesque nisl. Ut lobortis, mi at ultricies elementum, eros risus tincidunt urna, ac luctus nibh neque in dolor. Nullam luctus rutrum dictum. Phasellus condimentum pellentesque leo sit amet faucibus. Nunc eu ex non magna facilisis malesuada a ac neque. Donec interdum metus a nisi porta ornare. In vitae ligula quis massa vestibulum elementum. Vestibulum ligula risus, eleifend vitae ullamcorper quis, sagittis id velit. Donec elementum, mi id laoreet ornare, elit velit condimentum nisl, sagittis posuere justo felis vel arcu. Sed tempor lorem in lorem euismod, quis vulputate elit vulputate. Praesent convallis turpis massa, id posuere risus consectetur sed. Aenean scelerisque odio nec justo convallis bibendum. Nulla posuere sagittis velit, in sagittis justo bibendum at. Nam volutpat ex ex, sit amet sodales orci euismod sit amet.

Nunc sit amet ligula placerat ex venenatis suscipit a et turpis. Aenean sagittis posuere enim, vel scelerisque ex ultricies sed. Phasellus consequat velit id auctor volutpat. Aenean turpis mauris, tristique id luctus ultricies, gravida a lectus. Vivamus nec orci et dolor pellentesque viverra. Nam tempus dapibus tortor ut mollis. Sed euismod orci nibh, non consequat arcu feugiat a. Etiam eu ultrices arcu, quis sagittis justo. Integer interdum dapibus imperdiet.

Phasellus nec gravida sem. Donec porta eros ut odio consequat, a mollis eros ullamcorper. Praesent eget ante eget mi eleifend iaculis. Duis consequat justo vitae dictum convallis. Donec lacinia risus neque, eu tristique ipsum mollis malesuada. Nam accumsan dapibus orci in pharetra. Vestibulum molestie, eros id commodo eleifend, libero nisl ultricies ante, vel vehicula nulla erat aliquet tortor. Mauris in commodo erat, non aliquam ex. Integer consectetur turpis at lacus facilisis, ac placerat elit pharetra. Mauris eu ligula pulvinar, sagittis urna quis, imperdiet sem. Pellentesque faucibus ligula sem, sit amet sagittis elit pulvinar quis.

Suspendisse eleifend velit ut ligula interdum, sed tristique mi imperdiet. Mauris vel dolor ut felis sodales tincidunt. Vivamus malesuada et risus et laoreet. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Pellentesque metus dolor, efficitur a libero id, auctor imperdiet ipsum. Duis vestibulum nisl ac dignissim rhoncus. Praesent id leo risus. Aliquam erat volutpat. Fusce congue quam scelerisque porttitor pretium. Aliquam dictum eros a mauris mollis imperdiet. Nullam vitae lacus vitae nibh congue pulvinar. Mauris imperdiet porttitor sem, eu imperdiet urna pretium quis. Quisque fringilla, neque ac tincidunt fermentum, enim lacus egestas sem, vitae aliquam nibh neque id turpis.
  </div>
)

const Home = class Home extends Component {
  constructor(props) {
    super(props)
  }

  render () {
    return (
      <div>
        <TopMenu />
        <Content>
          <PageSection>
          </PageSection>
        </Content>
      </div>
    )
  }
}

export default withApp(Home)
