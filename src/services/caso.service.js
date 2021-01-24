import ApiService from "@/services/api.service";
const url = "casos";
export const service = {
    getAll() {
        return ApiService.get(url, { id: "" });
    },
    get(id) {
        return ApiService.get(url, { id: id });
    },
    create(params) {
        return ApiService.post(url, { params: params });
    },
    update(params , id) {
        return ApiService.update(url, { id: id, params: params });
    },
    destroy(id) {
        return ApiService.delete(url, { id: id });
    },
};
export default service;