/**
 * Copyright IBM Corp. 2015, 2020
 * SPDX-License-Identifier: MIT
 */

import { Listener } from "./listener"

export class HealthCheckListener extends Listener {

  public listen() {
    return this.server.get("/health_check", (req, res) => {
      return this.reply(res, {success: true, reason: "Healthy"})
    })
  }

}
