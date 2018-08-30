// @flow

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import userActions from '../../actions/user'
import { RutubeNetworkService } from '../../services'
import type { Series } from '../../services/RutubeNetworkService'

const style = {
  seriesList: {
    // width: '100%',
    padding: 30,
    // display: 'flex',
    // flexWrap: 'wrap',
    // justifyContent: 'space-between'
  },
  series: {
    display: 'inline-block',
    // flexDirection: 'column',
    // flexWrap: 'wrap',
    margin: '0 30px 20px 0',
  },
  seriesImageWrapper: {},
  seriesImage: {
    height: 170
  },
  seriesContent: {
    fontSize: 16,
    fontWeight: 'bold'
  }
}

class SeriesVideo extends Component {
  static propTypes = {
    videoTrackId: PropTypes.number.isRequired,
  }
  
  state = {
    seriesList: []
  }
  
  async componentDidMount () {
    this.setState({
      seriesVideoData: await RutubeNetworkService.getVideoByTrackId(this.props.videoTrackId)
    })
    
  }

  
  render() {
    return (
      <div style={style.seriesList}>
        { this.renderSeriesList() }
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return state
}

const mapDispatchToProps = (dispatch) => {
  const user = bindActionCreators(userActions, dispatch)
  return {
    onLogout: (data) => {
      user.logout(data)
    },
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SeriesVideo)

