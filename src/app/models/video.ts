export interface Video {
    id: string,
    title: string,
    description: string,
    videoUrl: string,
    imgUrl: string,
    group: 'Conductores' | 'Administrativos' | 'Todos',
    type: 'Video' | 'PDF',
    test: string
}

export type VideoDTO = Omit<Video, 'id' | 'imgUrl' | 'videoUrl'>;