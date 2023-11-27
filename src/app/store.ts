import { create } from 'zustand';

type AppState = {
    playAudio: boolean;
    headFollow: boolean;
    smoothMorphTarget: boolean;
    morphTargetSmoothing: number;
    current_animation: string;
    script: string
};

type AppActions = {
    setPlayAudio: (value: boolean) => void;
    setHeadFollow: (value: boolean) => void;
    setSmoothMorphTarget: (value: boolean) => void;
    setMorphTargetSmoothing: (value: number) => void;
    setCurrentAnimation: (value: string) => void;
    setScript: (value: string) => void;
};

const useAppState = create<AppState & AppActions>((set) => ({
    playAudio: false,
    headFollow: true,
    smoothMorphTarget: true,
    morphTargetSmoothing: 0.5,
    current_animation: "Greeting",
    script: "welcome",

    // Functions to update state values
    setScript: (value: string) => set({ script: value }),
    setPlayAudio: (value: boolean) => set({ playAudio: value }),
    setHeadFollow: (value: boolean) => set({ headFollow: value }),
    setSmoothMorphTarget: (value: boolean) => set({ smoothMorphTarget: value }),
    setMorphTargetSmoothing: (value: number) => set({ morphTargetSmoothing: value }),
    setCurrentAnimation: (value: string) => set({ current_animation: value }),
}));

export default useAppState;
