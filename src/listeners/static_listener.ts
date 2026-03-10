/**
 * Copyright IBM Corp. 2015, 2020
 * SPDX-License-Identifier: MIT
 */

import * as express from "express"
import { Listener } from "./listener"

export class StaticListener extends Listener {

  public listen() {
    this.server.use(express.static("public"))
  }

}
