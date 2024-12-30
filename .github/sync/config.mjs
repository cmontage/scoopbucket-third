import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { getLogger } from '@lzwme/fe-utils';

const debug = process.argv.slice(2).includes('--debug');
export const isCI = +process.env.SYNC === 1;
export const logger = getLogger('SYNC', debug ? 'debug' : 'log');
export const rootDir = path.resolve(fileURLToPath(import.meta.url), '../../..');
export const CONFIG = {
  rootDir,
  debug,
  isCI,
  /** 是否忽略 manifest JSON 解析失败的应用 */
  ignoreParseFailed: true,
  tmpDir: path.resolve(rootDir, 'tmp'),
  // ghproxy: 'https://gh.api.99988866.xyz',
  //ghproxy: 'https://mirror.ghproxy.com',寄了
  ghproxy: 'https://ghgo.xyz',
  // ghproxy: 'https://www.ghproxy.cc',
  // ghproxy: 'https://ghps.cc',
  // ghproxy: 'https://ghproxy.net',
  // ghproxy: 'https://gh.ddlc.top',
  // --- https://github-mirror.us.kg --- 大量个人部署的服务列表
  /** 已失效的历史地址；用于兼容其他仓库的，避免套娃问题 */
  ghproxyInvalid: ['https://gh-proxy.com', 'https://ghproxy.com', 'https://mirror.ghproxy.com'],
  /** 同步仓库列表，按仓库质量排序 */
  repo: new Set([
    `ivaquero/scoopet`,
    `scoopcn/scoopcn`, // 大多是国内应用程序
    `kkzzhizhou/scoop-apps`,
    //`anderlli0053/DEV-tools`,
    `akirco/aki-apps`,

  ]),
  filter: /audacity_installer|\.gitkeep|__/,
  sourcesStatFile: path.resolve(rootDir, `sync-sources.txt`),
  lowPriorityFile: path.resolve(rootDir, 'bucket-low-priority.txt'),
  ignoredFile: path.resolve(rootDir, 'bucket-ignored.txt'),
};
