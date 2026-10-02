#!/usr/bin/env node
import { createChannelMcp } from './_shared/create-channel-mcp.mjs';

const mcp = createChannelMcp({
  slug: "chainjobs",
  boardId: "chainjobs-official",
  domain: "chainjobs.io",
  npmName: "zc-chainjobs-scout-mcp",
});

mcp.start().catch((e) => {
  console.error(e);
  process.exit(1);
});
