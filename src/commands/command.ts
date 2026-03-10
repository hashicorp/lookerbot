/**
 * Copyright IBM Corp. 2015, 2020
 * SPDX-License-Identifier: MIT
 */

import { ReplyContext } from "../reply_context"

export class Command {

  public attempt(context: ReplyContext): boolean {
    throw new Error("implement")
  }

}
