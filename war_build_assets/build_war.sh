#!/usr/bin/env bash
jar cvf example.war -C ./dist/ .
mkdir -p war
mv ./example.war ./war/
