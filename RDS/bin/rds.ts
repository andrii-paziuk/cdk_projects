#!/usr/bin/env node
import * as cdk from '@aws-cdk/core';
import { RdsStack } from '../lib/rds-stack';

const app = new cdk.App();
new RdsStack(app, 'RdsStack');
