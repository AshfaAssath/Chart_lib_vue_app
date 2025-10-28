import { createApp } from 'vue';
import App from './App.vue';
import './styles/chart.scss';

export function createMyApp(props = {}, uiAdapter) {
    const app = createApp(App, props);

    app.provide('UIAdapter', uiAdapter);
    app.mount(props.chartContainerId);
}

