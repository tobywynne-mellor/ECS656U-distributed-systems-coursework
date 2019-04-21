/// <reference path="../../phaser.d.ts" />

import { Scene } from 'phaser'
import geckos from 'geckos.io/lib/client'

export default class BootScene extends Scene {
  constructor() {
    super({ key: 'BootScene' })

    const channel = geckos(`${location.protocol}//${location.hostname}`, 9584)

    channel.onConnect(error => {
      if (error) console.error(error.message)

      channel.on('ready', () => {
        this.scene.start('GameScene', { channel: channel })
      })
    })
  }
}