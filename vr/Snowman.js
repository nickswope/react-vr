import React from 'react'
import {Sphere, View, Cylinder} from 'react-vr'

export default class Snowman extends React.Component {
  static propTypes = {

  }

  /*
    TODO: figure out how to manipulate the location and orientation
    of the the snowman programmatically, preferrably using the matrix
    API mentioned here:
    https://facebook.github.io/react-vr/docs/3dcoordinates-and-transforms.html#transform-properties
  */

  render () {
    return (
      <View>
        <Body />
        <TopHat />
        <Face />
      </View>
    )
  }
}

function Body () {
  return (
    <View>
      {/* bottom */}
      <Sphere
        radius={0.5}
        widthSegments={20}
        heightSegments={12}
      />

      {/* middle */}
      <Sphere
        radius={0.25}
        widthSegments={20}
        heightSegments={12}
        style={{transform: [{translate: [0, 0.75, 0]}]}}
      />

      {/* top */}
      <Sphere
        radius={0.15}
        widthSegments={20}
        heightSegments={12}
        style={{transform: [{translate: [0, 1.1, 0]}]}}
      />
    </View>
  )
}

function TopHat () {
  return (
    <View>
      {/* tall part */}
      <Cylinder
        radiusTop={0.3}
        radiusBottom={0.3}
        dimHeight={1} // why doesn't changing this do anything?
        segments={10}
        style={{
          color: 'black',
          transform: [
            {translate: [0, 1.25, 0]},
            {scale: 0.33}
          ]
        }}
      />

      {/* flat part */}
      <Cylinder
        radiusTop={20}
        radiusBottom={20}
        dimHeight={1}
        segments={12}
        style={{
          color: 'black',
          transform: [
            {translate: [0, 1.2, 0]},
            {scale: 0.01}
          ]
        }}
      />
    </View>
  )
}

function Face () {
  return (
    <View>
      <Nose />
      <Eyes />
    </View>
  )
}

function Nose () {
  return (
    <Cylinder
      radiusTop={0.01}
      radiusBottom={0.1}
      dimHeight={1}
      segments={10}
      style={{
        color: 'orange',
        transform: [
          {translate: [-0.25, 1.08, 0.1]},
          {rotateZ: 90}, {rotateX: 30},
          {scale: 0.25}
        ]
      }}
    />
  )
}

function Eyes () {
  return (
    <View>
      {/* right eye */}
      <Cylinder
        radiusTop={2}
        radiusBottom={2}
        dimHeight={1}
        segments={10}
        style={{
          color: 'black',
          transform: [
            {translate: [-0.2, 1.12, 0.075]},
            {rotateZ: 90}, {rotateX: 30},
            {scale: 0.01}
          ]
        }}
      />

      {/* left eye */}
      <Cylinder
        radiusTop={2}
        radiusBottom={2}
        dimHeight={1}
        segments={10}
        style={{
          color: 'black',
          transform: [
            {translate: [-0.2, 1.12, -0.025]},
            {rotateZ: 90}, {rotateX: 30},
            {scale: 0.01}
          ]
        }}
      />
    </View>
  )
}
