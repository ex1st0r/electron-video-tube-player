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
    width: 302,
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

class SeriesList extends Component {
  state = {
    seriesList: []
  }
  
  async componentDidMount () {
    this.setState({
      seriesList: await RutubeNetworkService.getGirlsSeriesList()
    })
    
  }
  
  renderSeriesList () {
    console.log('ren', this.state.seriesList)
    return this.state.seriesList.map(
      (series: Series, i: number) => (
        <div key={i} style={style.series}>
          <div style={style.seriesImageWrapper}>
            {
              series.thumbnail_url ? (
                <a href={series.video_url}>
                  <img style={style.seriesImage} src={series.thumbnail_url} alt='' />
                </a>
              ) : null
            }
          </div>
          <div style={style.seriesContent}>
            {
              series.title
            }
          </div>
        </div>
      ))
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
)(SeriesList)

