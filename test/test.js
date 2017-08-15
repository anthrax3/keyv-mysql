import test from 'ava';
import keyvTestSuite, { keyvOfficialTests } from '@keyv/test-suite';
import Keyv from 'keyv';
import KeyvMysql from 'this';

keyvOfficialTests(test, Keyv, 'mysql://root@localhost:3320/test', 'mysql://foo');

const store = () => new KeyvMysql('mysql://root@localhost:3320/test');
keyvTestSuite(test, Keyv, store);
